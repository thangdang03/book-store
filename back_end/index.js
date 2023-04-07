const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
dotenv.config();
const bodypaser  = require('body-parser');
const conect = require('./src/config/conec');
const Router = require("./src/router/main._router");

const app = express();
app.use(bodypaser.json({
    limit: "50mb"
}));

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("common"));
//router
Router(app);
//conect 
  conect();
app.listen(process.env.PORT,()=>{
    console.log(`app is listening on ${process.env.PORT}`);
})
