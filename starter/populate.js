require('dotenv').config()


const connectDB=require('./db/connect');
const products = require('./models/product');
const jsonProduct = require('./products.json')



const start = async ()=>{
    try {

        await connectDB(process.env.MONGO_URI)
        await products.deleteMany();
        await products.create(jsonProduct)
        console.log('sucess')
        process.exit(0)

    } catch (error) {

        console.log(error)
        process.exit(1)
    }
}

start()