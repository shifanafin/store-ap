require('dotenv').config()


const express = require('express')
const app  = express()

// async errors
const notFoundMiddleWare = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler');

app.use(express.json())


// routes


app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1> <a href="/api/v1/products"></a> ')
})

// products route
app.use(notFoundMiddleWare);
app.use(errorMiddleWare)

const 