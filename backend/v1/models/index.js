// ==================================
// ====== required libraries ========
// ==================================
require('dotenv').config()
const mongoose = require('mongoose')


// ==================================
// ====== connecting to database ====
// ==================================
mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Database connected !!!')
    })
    .catch(()=>{
        console.log('Error connecting to DB !')
    })