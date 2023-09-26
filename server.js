//Initialize Express and include env variables
require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');

const app     = express();




//Routes Section
app.get('/', (request,response) => 
{
    response.send('Hello, World!')
});

app.listen(PORT, () => {console.log(`Server is running in port ${PORT}`)});


//For the purposes of vercel, turn this into a serverless function by exporting my express function into vercels build proces
module.exports = app;