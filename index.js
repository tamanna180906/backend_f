require('node:dns').setServers(['1.1.1.1', '8.8.8.8'])
const express = require('express');
const app=express()
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnection = require('./config/dbConnection');
require('dotenv').config()



dbConnection()
app.use(cors());
app.use(express.json());



app.listen(5000,()=>{
    console.log('Server is running');
    
})



// mongodb+srv://<db_username>:<db_password>@cluster0.qedw48h.mongodb.net/
// kijevai
// backend_f