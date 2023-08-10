// =============================
// ======== libraries required =
// =============================
require('dotenv').config()
const Institution = require('../models/institution'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    validator = require('validator')

// =============================
// === funtion to create token==
// ============================= 
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '1d'})
}

// ===========================================
// ==== function that generates random nums ==
// ===========================================

const generateRandomNumber = () => {
    const length = 5;
  
    // Generate random number with a specified length
    const randomNumber = Math.floor(Math.random() * 10 ** length);
  
    // Pad the number with leading zeros to ensure it has exactly five digits
    const formattedNumber = randomNumber.toString().padStart(length, "0");
  
    return formattedNumber;
}

// function to get all Alumnus
exports.getAllInstitutions = async (req, res) => {
    try {
        
        // find all alumni in database
        let allInstitutions = await Institution.find({})

        // if not allAlumnus throw error 
        if(!allInstitutions){
            throw Error('resource could not be located !!')
        }

        // return status and data as json
        return res.status(200).json(allInstitutions)

    } catch (error) {
        // return status and error as json
        return res.status(403).json({message: error.message})
    }
}


exports.registerInstitution = async (req, res) => {

    try {
         // destructure requestbody
         const {name, emailAddress, location, password} = req.body

        // generate verification code
        const verificationCode =  await generateRandomNumber()

        // signup user using statics func
        const institution = await Institution.signup(name, emailAddress, location, password, verificationCode)

        // generate token
        const token = await createToken(institution._id)

        // send welcome email
        await Institution.sendEmail(emailAddress, 'Welcome to Transcript-Digita', `verfication code: ${verificationCode}`)

        // return user as json
        return res.status(200).json({institution, token})

    } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
    }
   
}

// login institution
exports.loginInstitution = async (req, res) => {
    const {emailAddress, password} = req.body

    try {
        console.log(emailAddress)
        // login institution
        const institution = await Institution.login(emailAddress, password)

        if(!institution){
            throw Error('Login unsucessful')
        }
        // create a token
        const token = createToken(institution._id)

        return res.status(200).json({institution, token})

    } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
    }
} 


// verify a recently registered user
exports.verifyInstitution = async (req, res) => {
    // get institutionId and verificationCode from user parameters
    
    const {verificationCode, id} = req.body
    
     try {
         // verify if id is valid
         if(!mongoose.Types.ObjectId.isValid(id)){
             throw Error('not a valid id')   
         }
 
         // find alumnus in database
         const foundInstitution = await Institution.findById(id)
 
         // if user not found in database throw error
         if(!foundInstitution){
             throw Error('This user doesnt exist in our database')
         }
 
         // not match throw error
         if(verificationCode != foundInstitution.verificationCode){
             throw Error('Incorrect verfication code')
         }
 
         // compare params code with found users verification code
         if(verificationCode === foundInstitution.verificationCode){
             let verifiedInstitution = await Institution.findByIdAndUpdate(id, {isVerified: true}, {new: true, useFindAndModify: false})
             return res.status(200).json({message: 'successfully updated', institution: verifiedInstitution})
         }
 
     } catch (error) {
         // return error code and message 
         return res.status(400).json({message: error.message})
     }
 }

module.exports = exports