const express=require('express');
const route= express.Router()

route.get('/',(req, res)=>{
    res.render('index');
})

route.get('/add-movie',(req, res)=>{
    res.render('add_movie');
})

route.get('/update-movie',(req, res)=>{
    res.render('update_movie');
})

module.exports=route