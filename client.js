const { Kafka } = require('kafkajs')
exports.kafka =  new Kafka({
    brokers: ['192.168.1.66:9092'],
    clientId: 'test-app'
})
