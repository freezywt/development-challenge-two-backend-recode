export function getParams(tableName: string, key: object = {}, updateExpression: string = '', expressionAttributeValues: object = {}, returnValues: string = '') {
    const params = {
        TableName: tableName,
        Key: key,
        updateExpression,
        expressionAttributeValues,
        returnValues
    }
    return params;
}