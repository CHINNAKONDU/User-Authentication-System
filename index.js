const mongoose = require('mongoose');
const express = require('express');
const jsonwebtoken = require('jsonwebtoken');
const user = require('./router/user');
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect
    ("mongodb://venkatasaichinnakondu_db_user:Test123@ac-ceguikv-shard-00-00.6roct4j.mongodb.net:27017,ac-ceguikv-shard-00-01.6roct4j.mongodb.net:27017,ac-ceguikv-shard-00-02.6roct4j.mongodb.net:27017/?ssl=true&replicaSet=atlas-1potsg-shard-0&authSource=admin&appName=Cluster0"
    )
    .then(()=>{
        console.log('connect mongodb')

    })
    .catch((error)=>{
        console.log(error.message);
        res.status(500).json({message:"is error",login:error})
    });

app.use('/api',user);




app.listen(3000,()=>{
    console.log('port is running......!')
});