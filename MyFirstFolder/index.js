exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda from github actions! lamdba.zip'),
    };
    return response;
};
 
