const express=require('express')
const userController=require('../controller/userController')
const router=express.Router()

router.get('/getProducts',userController.getProducts)
router.post('/buyProduct',userController.buyProduct)

module.exports=router