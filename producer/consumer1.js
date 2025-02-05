// import dotenv from "dotenv";
// dotenv.config();
// import { Kafka, Partitioners } from "kafkajs";
// import fs from "fs";

// const kafka = new Kafka({
//   clientId: "my-app",
//   brokers: [process.env.KAFKA_BROKER],
//   sasl: {
//     mechanism: "plain",
//     username: process.env.KAFKA_USERNAME,
//     password: process.env.KAFKA_PASSWORD,
//   },
//   autoCreateTopic: true,
//   ssl: {
//     ca: [fs.readFileSync("./ca.pem", "utf-8")], // ✅ Use Aiven's CA certificate
//     // rejectUnauthorized: false, // ✅ Disable SSL certificate validation
//   },
//   createPartitioner: Partitioners.LegacyPartitioner,
// });

// const admin = kafka.admin();
// (async () => {
//   try {
//     await admin.connect();
//     console.log("✅ Kafka connection successful!");
//   } catch (error) {
//     console.error("❌ Kafka connection failed:", error);
//   } finally {
//     await admin.disconnect();
//   }
// })();


// // -------------------------

// // const kafka = new Kafka({
// //   clientId: "my-app",
// //   brokers: [process.env.KAFKA_BROKER],
// //   ssl: true,
// //   sasl: {
// //     mechanism: "plain",
// //     username: process.env.KAFKA_USERNAME,
// //     password: process.env.KAFKA_PASSWORD,
// //   },
// // });

// const consumer = kafka.consumer({ groupId: "new_test_topic" });

// const runConsumer = async () => {
//   await consumer.connect();
//   await consumer.subscribe({ topic: "new_test_topic", fromBeginning: true });

//   await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       console.log(`Received: ${message.value.toString()}`);
//     },
//   });
// };

// runConsumer().catch(console.error);
