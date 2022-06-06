const express=require('express');
const route= express.Router()

const services=require('../services/render');

route.get('/',services.homeRoutes);

route.get('/',(req, res)=>{
    res.render('index');
})

route.get('/add-movie',services.add_movie)

route.get('/update-movie',services.update_movie)


module.exports=route