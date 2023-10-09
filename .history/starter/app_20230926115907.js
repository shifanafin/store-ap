require('dotenv').config()


const express = require('express')
const app  = express()


const notFoundMiddleWare = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler');