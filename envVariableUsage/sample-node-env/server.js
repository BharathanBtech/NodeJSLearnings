require('dotenv').config();

const express = require('express');

const app = express();


const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME;
const SECRET_KEY = process.env.SECRET_KEY;

app.get('/',(req,res)=>{res.send(`Welcome to ${APP_NAME}`)});
app.get('/secret',(req,res)=>{res.send(`The secret key is: ${SECRET_KEY}`)});
app.listen(PORT,()=>{console.log(`${APP_NAME} is running on port ${PORT}`)});

