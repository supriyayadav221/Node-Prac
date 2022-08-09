const express = require('express');
const router = require('./backend/routes/routes');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const XLSX = require('xlsx')

const path = require('path');
const connectDB = require('./backend/config/db');
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
//app.get('/',(req, res)=>{res.send('Hello world')})
app.use('/',router)
app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))