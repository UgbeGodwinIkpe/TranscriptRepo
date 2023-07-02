// =============================
// ==== libraries required =====
// =============================
require('dotenv').config()
const Alumni = require('../models/alumni'),
    jwt = require('jsonwebtoken'),
    crypto = require('crypto')

// =============================
// === funtion to create token==
// ============================= 
const createToken = (_id) => {
    jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '1d'})
}

// =====================================
// ===== Alumni controller functions ===
// =====================================

// function to get all Alumnus
exports.getAllAlumnus = async (req, res) => {
    try {
        
        // find all alumni in database
        let allAlumnus = await Alumni.find({})

        // if not allAlumnus throw error 
        if(!allAlumnus){
            throw Error('resource could not be located !!')
        }

        // return status and data as json
        return res.status(201).json(allAlumnus)

    } catch (error) {
        // return status and error as json
        return res.status(403).json({error: error.message})
    }
}


//function to create new alumni account
exports.createAlumni = async (req, res) => {

    // destructuring request body
    let {fullName, emailAddress, matricNo, password} = req.body

   try {
        // signup user using static function   
        const alumni = await Alumni.signup(fullName, emailAddress, matricNo, password)

        // create a token
        const token = createToken(alumni._id)
        
        // generate verification code
        let verificationCode = await crypto.randomBytes(4).toString('hex');

        // send welcome email
        await Alumni.sendEmail(emailAddress, 'Welcome to Transcript-Digita', `Our Team is working around the clock the ensure smooth requesting, monitoring and delivery of transcripts within Nigerian universities. verfication code: ${verificationCode}`)

        // return status code and data as json
        return res.status(200).json({alumni, token}) 

   } catch (error) {
        // return error code and message 
        return res.status(400).json({error: error.message})
   }
}


module.exports = exports
