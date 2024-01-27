Kafka is a pub/sub model 
Tools:
    1) NodeJs
    2) Docker
    3) Any editor

Commands:

- Start zookeeper container and expose port 2181 - is basically used by kafka internally for sefl balacing to pick particular partition 

    docker run -p 2181:2181 zookeeper

- Start Kafka container, expose port 9092 and set ENV variable

    docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=192.168.1.66:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.66:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka




Admin usually setup infra
    creates Topic/Partition etc..

Producer - produce msgs
