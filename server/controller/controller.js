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
    Advancedb.find()
    .then(movie=>{
        res.send(movie)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Error occurred while trying to retrieve movie"})
    })
}

exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Movie must not be empty to be updated"})
    }
    const id=req.params.id;
    Advancedb.findByIdAndUpdate(id,req.body,{UseFindAndModify:false}).then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot update user with ${id}. User not found!`})
        }else{
            res.send(data)
        }
    }).catch(err=>{
        res.status(500).send({message: "Error, Update user information"})
    })
    
}

exports.delete=(req,res)=>{
    const id=req.params.id;

    Advancedb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
        res.status(404).send({message:"Cannot Delete with ${id}, Id is wrong"})
        }else{
            res.send({message:"User Deleted successfully!"})
        }
    }).catch(err=>{
        res.status(500).send({message:"Could not delete user with id=" +id});
    });
}