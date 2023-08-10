// ===============================================
// ============ libararies required ==============
// ===============================================
require('dotenv').config()
const express = require('express'),
      app    = express(),
      cors = require('cors'),
      path = require('path'),
      bodyParser = require('body-parser'),
      models = require('./models/'),
      alumniRoutes = require('./routes/alumni'),
      institutionRoutes = require('./routes/institution'),
      transcriptRoutes = require('./routes/transcripts')
      
// using cors 
app.use(cors())


// =========================================================
// === using bodyParser access to req body in post route ===
// =========================================================
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// =============================================================
// === Printing all request paths and methods for each route ===
// =============================================================
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})


// ==============================================
// ============== Routes ======================== 
// ==============================================  
app.get('/', (req, res) => {
    res.send('Welcome to Transcript digita api, our team are working around the clock to ensure the ease n requesting, tracking and delivery of transcripts with Nigerian universities, enjoy the process')
})

app.use('/api/v1/alumnus', alumniRoutes)
app.use('/api/v1/institution', institutionRoutes)
app.use('/api/v1/transcript', transcriptRoutes)

// ===========================================
// ============ serving app ==================
// ===========================================
app.listen(process.env.PORT, () => {
    console.log(`Transcript-Digita api serving on port: ${process.env.PORT}`)
})