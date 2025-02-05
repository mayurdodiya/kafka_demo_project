here 4 microservices we use

1.producre => for send message in topic
2.consumer ==>  subscribe topic and receive message
3.consumer1 ==> subscribe topic and receive message
4.consumer2 ==> subscribe topic and receive message


when producer send message all that consumer receive message automaticaly who are subscribed that topic
note :- also all consumer groupId must will be different.
        if any two consumer have same groupId then they are message alternatively.
partition :- you can set message any individule partition
offect :- 
