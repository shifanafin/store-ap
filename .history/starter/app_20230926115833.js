require('dotenv').config()


const express = require('express')
const app  = express()


const notFoundMiddleWare = require('./middleware/not-found')