here 4 microservices we use

1.producre => for send message in topic (node producer.js)
2.consumer ==>  subscribe topic and receive message (node consumer.js)
3.consumer1 ==> subscribe topic and receive message (node consumer1.js) 
4.consumer2 ==> subscribe topic and receive message


when producer send message all that consumer receive message automaticaly who are subscribed that topic
note :- also all consumer groupId must will be different.
        if any two consumer have same groupId then they are message alternatively.
partition :- you can set message any individule partition
offect :- In Apache Kafka, an offset is a unique identifier assigned to each record (message) within a partition of a Kafka topic. It helps Kafka keep track of messages and ensures order and reliability in message processing.Each partition in a topic maintains its own sequence of offsets, starting from 0 and increasing sequentially.Kafka consumers keep track of the last processed offset to avoid reading the same message multiple times.




