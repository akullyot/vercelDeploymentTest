//Initialize Express and include env variables
require('dotenv').config();
const express = require('express');

const app     = express();




//Routes Section
app.get('/', (request,response) => 
{
    response.send('Hello, World!')
});

app.listen(3000);