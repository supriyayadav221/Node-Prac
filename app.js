const express = require('express');
const router = require('./backend/routes/routes');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/pets',router)


app.listen(PORT, ()=> console.log(`Server started on ${PORT}`))