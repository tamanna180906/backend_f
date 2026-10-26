require('node:dns').setServers(['1.1.1.1', '8.8.8.8'])
const express = require('express');
const app=express()
const cors = require('cors');
const mongoose = require('mongoose');
const dbConnection = require('./config/dbConnection');
const authRoute=require("./routes/authRoute")
require('dotenv').config()



dbConnection()
app.use(cors());
app.use(express.json());


app.use('/api/v1/auth',authRoute)




app.listen(8000,()=>{
    console.log('Server is running');
    
})



// mongodb+srv://<db_username>:<db_password>@cluster0.qedw48h.mongodb.net/
// kijevai
// backend_f