const express = require('express')
const router = express.Router()


const {   getAllProductsStatic,
    getAllProducts} = require('../controllers/products')


router.route('/').getAllProductsStatic