var Advancedb=require('../model/model');

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }

    const movie=new Advancedb({
        Movie_Title:req.body.Movie_Title,
        Release_Date:req.body.Release_Date,
        Box_Office:req.body.Box_Office
    })

    movie
    .save(movie)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error has occured while creating a create operation"
        });
    });
}

exports.find=(req,res)=>{
    
}

exports.update=(req,res)=>{
    
}

exports.delete=(req,res)=>{
    
}