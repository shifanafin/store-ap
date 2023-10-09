require('dotenv').config()
const connectDB = require('./db/connect')
const ProductRouter = require('./routes/products')


const express = require('express')
const app  = express()

// async errors
const notFoundMiddleWare = require('./middleware/not-found');
const errorMiddleWare = require('./middleware/error-handler');

app.use(express.json())


// routes


app.get('/',(req,res)=>{
    res.send('<h1>Store Api</h1> <a href="/api/v1/products">Product Route</a>')
})

app.use('/api/v1/products',ProductRouter  )

// products route
app.use(notFoundMiddleWare);
app.use(errorMiddleWare)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
     app.listen(port,console.log(`server is running at port : ${port}`))
        
    } catch (error) {
        console.log(error)
    }
}

start()
