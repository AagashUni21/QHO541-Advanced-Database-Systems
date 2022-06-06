const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const { use } = require('express/lib/application');

const app = express();

dotenv.config({path:'config.env'})
const PORT =process.env.PORT||8080

app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

app.use('/css',express.static(path.resolve(__dirname, 'assets/css')));
app.use('/images',express.static(path.resolve(__dirname, 'assets/images')));
app.use('/js',express.static(path.resolve(__dirname, 'assets/js')));

app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is listening on http://localhost:${PORT}`)});
