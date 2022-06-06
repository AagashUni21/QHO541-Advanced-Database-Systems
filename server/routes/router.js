const express=require('express');
const route= express.Router()

const services=require('../services/render');
const controller=require('../controller/controller');

route.get('/',services.homeRoutes);

route.get('/',(req, res)=>{
    res.render('index');
})

route.get('/add-movie',services.add_movie)

route.get('/update-movie',services.update_movie)

route.post('/api/movies',controller.create);
route.get('/api/movies',controller.find);
route.put('/api/movies/:id',controller.update);
route.delete('/api/movies/:id',controller.delete);

module.exports=route