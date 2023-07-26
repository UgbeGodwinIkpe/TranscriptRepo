// =================================
// ======= libararies required =====
// =================================
const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    validator = require('validator'),
    nodemailer = require('nodemailer') ,
    smtpTransport = require('nodemailer-smtp-transport')


// =================================
// ==== creating Alumni schema =====
// =================================
const alumniSchema = new mongoose.Schema({
    fullName:           {type: String},
    matricNo:           {type: String},
    department:         {type: String},
    yearOfGraduation:   {type: Date},
    monthOfGraduation:  {type: Number},
    emailAddress:       {type: String, required: true},
    password:           {type:String},
    transcripts:        [],
    paymentDetails:     [],
    verfificationCode:  {type: String},
    isActive:           {type: Boolean, default: true},
    isVerified:         {type: Boolean, default: false},
    isDisabled:         {type: Boolean, default: false},
    isRestricted:       {type: Boolean, default: false},
    resetPasswordToken: {type: Number },
    resetPasswordExpires: {type: String}

}, {timestamps: true})

// ==================================
// ==== static functions for Auth ===
// ==================================

// signup user function
alumniSchema.statics.signup = async function (fullName, emailAddress,  password, verfificationCode) {

    // check if all inputs are filled
    if(!fullName || !emailAddress || !password) {
        throw Error('all fields are required')
    }

    // using validator to validate email
    if(!validator.isEmail(emailAddress)){
        throw Error('email is not valid')
    }
    
    // using validator to check if password is strong
    if(!validator.isStrongPassword(password)){
        throw Error ('password not strong enough')
    }

    // checking if email already exists in database
    const exists = await this.findOne({emailAddress})

    // throwing error if email exists
    if(exists){
        throw Error('Email already in use')
    }

    // generating salt to hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // creating new alumni in database
    const alumni = await this.create({fullName, emailAddress, password: hash, verfificationCode})

    // returning the saved user
    return alumni
}

// login user
alumniSchema.statics.login = async function (emailAddress, password) {
    // validation
    if(!emailAddress || !password){
        throw Error('All fields must be filled')
    }
 
     // find an email in database   
    const alumni = await this.findOne({emailAddress})
 
     // not exist throw error   
    if(!alumni){
        throw Error('Incorrect email')
    }
    
    // if account inactive throw error    
    if(!alumni.isVerified){
        throw Error('sorry your account is disabled')
    }

    // if account inactive throw error    
    if(!alumni.isActive){
         throw Error('sorry your account is disabled')
    }
    
    // compare password with users password
    const match = await bcrypt.compare(password, alumni.password)
    
    // throw an error if not match
    if(!match){
        throw Error('Incorrect password')
    }
 
    return alumni
}

// send Alumni and email function
alumniSchema.statics.sendEmail = async function (email, subject, message) {
    let transport = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    }))

    const info = await transport.sendMail({
        from: process.env.EMAIL_USERNAME,
        to: email,
        subject: subject,
        html: message

    }, (err, sent)=>{    
        err ? console.log('error send email') : console.log('succesfully sent', sent)     
    
    })
}

// get a single user
alumniSchema.statics.getAlumniById = async function (id){

}

// ==================================
// ==== modeling alumni with schema==
// ==================================
const Alumni = mongoose.model('alumni', alumniSchema)

// ==================================
// ======== exports =================
// ==================================
module.exports = Alumni