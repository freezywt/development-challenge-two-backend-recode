import * as AWS from 'aws-sdk'

export function connectToDynamoDb() {
    AWS.config.update({
        region: process.env.REGION,
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        dynamodb: {
            endpoint: process.env.ENDPOINT,
        }
    });

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb;
}