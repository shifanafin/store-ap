require('dotenv').config()


const express = require('express')
const app  = express()

// async errors
const notFoundMiddleWare = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler');

app.use(express.json())


// routes


app.get('./')
