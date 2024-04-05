exports.handler = async (event, context) => {
    const password = process.env.PASSWORD; // Das Passwort wird als Umgebungsvariable gespeichert
    const userPassword = event.queryStringParameters.password;
  
    if (!userPassword || userPassword !== password) {
      return {
        statusCode: 401,
        body: "Unauthorized: Please provide a valid password."
      };
    }
  
    return {
      statusCode: 200,
      body: "Welcome to the protected site!"
    };
  };
  