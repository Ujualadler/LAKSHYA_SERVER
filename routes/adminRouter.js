const express=require('express')
const adminController=require('../controller/adminController')
const router=express.Router()

router.post('/addProduct',adminController.addProduct)

module.exports=router