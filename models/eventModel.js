const mongoose=require('mongoose')

const eventSchema=new mongoose.Schema({
    heading:{
        type:String
    },
    description:{
        type:String
    }

})

const eventModel=mongoose.model('event',eventSchema)
module.exports=eventModel