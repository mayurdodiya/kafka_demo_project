
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
    // rejectUnauthorized: false, // ✅ Disable SSL certificate validation
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

    const producer = kafka.producer();

    const createTopic = async (topicName) => {
      const topics = await admin.listTopics();

      if (!topics.includes(topicName)) {
        console.log(`🚀 Creating topic: ${topicName}`);
        await admin.createTopics({
          topics: [
            {
              topic: topicName,
              numPartitions: 3, // Set the number of partitions
              replicationFactor: 1, // Set the replication factor
            },
          ],
        });
        console.log(`✅ Topic '${topicName}' created successfully!`);
      } else {
        console.log(`⚡ Topic '${topicName}' already exists!`);
      }
      await admin.disconnect();
    };

    const sendMessage = async () => {
      try {
        // await this.createOrCheckTopic("test-topic");
        const topic = "new_test_topic2";
        await createTopic(topic);

        await producer.connect();
        await producer.send({
          topic: topic,
          messages: [{ value: "Hello from Aiven Kafka 126!",}],
        });
        console.log("🚀 🚀 🚀 :-Kafka message sent successfully 126");
        await producer.disconnect();
      } catch (error) {
        console.log(error);
      }
    };

    sendMessage().catch(console.error);
