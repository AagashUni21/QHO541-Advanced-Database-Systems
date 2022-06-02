const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

dotenv.config({path:'config.env'})
const PORT =process.env.PORT||8080

app.use(morgan('tiny'));

app.get('/',(req, res)=>{
    res.send("Application");
})

app.listen(PORT,()=>{console.log(`Server is listening on http://localhost:${PORT}`)});
