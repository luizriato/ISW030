const swaggerAutogen = require('swagger-autogen')({openapi: '3.1.0'});

const doc = {
    info: {
        version : "1.0.0",
        title: "exercicio1",
        description: ""
    },
    servers[
        {
            url: "http://localhost:3000"
        }
    ],   
};

const outputFile = './swagger'