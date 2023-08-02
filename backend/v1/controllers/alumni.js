// =============================
// ==== libraries required =====
// =============================
require('dotenv').config()
const Alumni = require('../models/alumni'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    validator = require('validator'),
    bcrypt = require('bcryptjs'),
    fs = require('fs')

const htmlContent = fs.readFileSync('./views/welcomeEmail.html', 'utf-8')


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
        return res.status(403).json({message: error.message})
    }
}

// function to get single Alumni
exports.getAlumniById = async ( req, res) => {
    const {id} = req.params

    try {
        // verify if id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }

        // find alumni using db using id
        let alumni = await Alumni.findById(id)

        // if not found throw error
        if(!alumni){
            throw Error(`resource could ot be located`)
        }

        // return data and message as json
        res.status(200).json({message: 'successful', data: alumni})

    } catch (error) {
        // return status and error as json
        return res.status(403).json({message: error.message})
    }
}


//function to create new alumni account
exports.createAlumni = async (req, res) => {

    // destructuring request body
    let {fullName, emailAddress, password} = req.body

   try {
        // generate verification code
        let verificationCode = await generateRandomNumber()

        // signup user using static function   
        const alumni = await Alumni.signup(fullName, emailAddress, password, verificationCode)

        // create a token
        const token = createToken(alumni._id)

        // send welcome email
        await Alumni.sendEmail(emailAddress, 'Welcome to Transcript-Digita', `verfication code: ${verificationCode}`)

        // return status code and data as json
        return res.status(200).json({alumni: alumni, token: token}) 

   } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
   }
}

// forgot password
exports.forgotPassword = async (req, res) => {
    try {
        
        // get all info from parameters
        const { emailAddress } = req.body;
        const foundAlumni = await Alumni.findOne({ emailAddress });
        
        // check if email exists in database
        if (!foundAlumni) {
            throw Error('Email does not exist in our database')
        }

        // Generate a reset token
        const resetToken = await generateRandomNumber()

        // Set the reset token and expiration time in the foundAlumni document
        foundAlumni.resetPasswordToken = resetToken;
        foundAlumni.resetPasswordExpires = Date.now() + 3600000; // Token expires in 1 hour

        // save resetToken and expiry date in database
        await foundAlumni.save();

        // send password reset email
        await Alumni.sendEmail(emailAddress, 'Reset password', `Password reset link: https://transcript360.onrender.com/alumni/reset-password/${resetToken}`)

        // debug here for errors
        return res.status(200).json({message: `verification email successfully sent`, alumni: foundAlumni})

    } catch (error) {
         // return error code and message 
         return res.status(400).json({message: error.message})
    }
}


// password reset
exports.passwordReset = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        // find alumni using token and expiry time
        const foundAlumni = await Alumni.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        // if alumni not found throw error
        if (!foundAlumni) {
            throw Error("Password reset token is invalid or has expired");
        }

        // check password strength
        // using validator to check if password is strong
        if(!validator.isStrongPassword(password)){
            throw Error ('password not strong enough')
        }
        // hash password
        // generating salt to hash password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        // Update the foundAlumni's password
        foundAlumni.password = hash;
        foundAlumni.resetPasswordToken = '';
        foundAlumni.resetPasswordExpires = '';

        await foundAlumni.save();

        return res.status(200).json({ message: "Password reset successful", alumni: foundAlumni });
        
    } catch (error) {
         // return error code and message 
         return res.status(400).json({message: error.message})
    }
}

// verify a recently registered user
exports.verifyAlumnus = async (req, res) => {
   // get alumnusId and verificationCode from user parameters
   
   const {verificationCode, id} = req.body
   
    try {
        // verify if id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }

        // find alumnus in database
        const foundAlumni = await Alumni.findById(id)

        // if user not found in database throw error
        if(!foundAlumni){
            throw Error('This user doesnt exist in our database')
        }

        // not match throw error
        if(verificationCode != foundAlumni.verfificationCode){
            throw Error('Incorrect verfication code')
        }

        // compare params code with found users verification code
        if(verificationCode === foundAlumni.verfificationCode){
            let verifiedAlumni = await Alumni.findByIdAndUpdate(id, {isVerified: true}, {new: true, useFindAndModify: false})
            return res.status(200).json({message: 'successfully updated', alumni: verifiedAlumni})
        }

    } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
    }
}

// login Alumni
exports.loginAlumnus = async (req, res) => {
    const {emailAddress, password} = req.body

    try {
        // login alumni
        const alumni = await Alumni.login(emailAddress, password)

        if(!alumni){
            throw Error('Login unsucessful')
        }
        // create a token
        const token = createToken(alumni._id)

        return res.status(200).json({alumni, token})

    } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
    }
} 

// update alumni information
exports.updateAlumni = async (req, res) => {
    const {id} = req.params
    const {
        fullName,
        matricNo,
        phoneNumber,
        emailAddress,
        paymentDetails,
        yearOfgraduation,
        monthOfGraduation,
        departmant
    } = req.body

    try {
        // verify if id is valid
        if(!mongoose.Types.ObjectId.isValid(alumniId)){
            throw Error('not a valid id')   
        }
        
    } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
    }
}

// delete Alumni
exports.deleteAlumni = async (req, res) => {
    const {id} = req.params

    try {
        // verify if id is valid
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw Error('not a valid id')   
        }

        // search alumni db and delete item with the id
        let deletedAlumni = await Alumni.findByIdAndDelete(id)

        if(!deletedAlumni){
            throw Error('this resource could not be deleted, it seems it doest exist in our database')
        }

        return res.status(200).json({message: 'successfully deleted', data: deletedAlumni})

    } catch (error) {
        // return error code and message 
        return res.status(400).json({message: error.message})
    }
}

module.exports = exports
