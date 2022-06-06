const mongoose=require('mongoose');

var schema=new mongoose.Schema({
    Movie_Title:{
        type:String,
        require:true,
        unique:true
    },
    Release_Date:{
        type:Date,
        required:true
    },
    Box_Office:{
        type:Number,
        required:true
    }
})

const Advancedb=mongoose.model('advancedb',schema);

module.exports=Advancedb;