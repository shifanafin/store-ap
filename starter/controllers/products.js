const product = require('../models/product.js')


const getAllProductsStatic = async(req,res)=>{
    const search = "a"
   const products =  await product.find({
    name : {$regex:search,$options:'i'}
    
}).select('name price').sort('price')
    res.status(200).json({products, nbHits:products.length})
}

const getAllProducts = async(req,res)=>{
    const {featured,company,name,sort,fields} = req.query
    const queryObject = {}
   if(featured){
    queryObject.featured = featured === 'true' ? true : false
   }
   if(company){
    queryObject.company = company
   }
   if(name){
    queryObject.name = {$regex:search,$options:'i'}
   }

// sort
    let result =   product.find(queryObject)
    if(sort){
       const sortList = sort.split(',').join(' ')
       result = result.sort(sortList)
    }
   else{
    result = result.sort("createAt")
   }
//    fields
if(fields){
    const fieldArray = fields.split(',').join(" ")
    result = result.select(fieldArray)
}

    const products = await result
    console.log(queryObject)

    res.status(200).json({products,nbHits:products.length})
}

module.exports={
    getAllProductsStatic,
    getAllProducts
}
