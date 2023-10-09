const mongoose =  require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'product must be probided']
    },
    price:{
        type : Number ,
        require : [true,'Price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating :{
        type :Number,
        default : 4.5,
    },
    createAt:{
        type:Date,
        default: Date.now()
    },
    company:{
        type:String,
        value:["ikea","liddy","caressa","marcos"],
        message : '{VALUE }is not supported'
        // enum:["ikea","liddy","caressa","marcos"]

    }

})


module.exports=mongoose.model('product',productSchema)