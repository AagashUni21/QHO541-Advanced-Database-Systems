const axios=require('axios');
const { response } = require('express');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/movies')
    .then(function(response){
        res.render('index',{movies:response.data});
    }).catch(errr=>{
        res.send(err);
    })
}

exports.add_movie=(req,res)=>{
    res.render('add_movie');
}

exports.update_movie=(req,res)=>{
    axios.get('http://localhost:3000/api/movies',{params:{id:req.query.id}})
    .then(function(moviedata){
        res.render("update_movie",{movie: moviedata.data})
    }).catch(err=>{
        res.send(err);
    })
}