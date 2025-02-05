import dotenv from "dotenv";
dotenv.config();
import { Kafka, Partitioners } from "kafkajs";
import fs from "fs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [process.env.KAFKA_BROKER],
  sasl: {
    mechanism: "plain",
    username: process.env.KAFKA_USERNAME,
    password: process.env.KAFKA_PASSWORD,
  },
  autoCreateTopic: true,
  ssl: {
    ca: [fs.readFileSync("./ca.pem", "utf-8")], // ✅ Use Aiven's CA certificate
  },
  createPartitioner: Partitioners.LegacyPartitioner,
});

const admin = kafka.admin();
(async () => {
  try {
    await admin.connect();
    console.log("✅ Kafka connection successful!");
  } catch (error) {
    console.error("❌ Kafka connection failed:", error);
  } finally {
    await admin.disconnect();
  }
})();

const consumer = kafka.consumer({ groupId: "consumer_g_0" });

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "new_test_topic2", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`🟢 consumer(0) Received message from ${partition} partition : ${message.value.toString()} !`);
    },
  });
};

runConsumer().catch(console.error);
