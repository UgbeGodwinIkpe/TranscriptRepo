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
    matricNo:           {type: String, required: true},
    department:         {type: String},
    yearOfGraduation:   {type: Date},
    monthOfGraduation:  {type: Number},
    emailAddress:       {type: String, required: true},
    transcripts:        [],
    paymentDetails:     [],
    isActive:           {type: Boolean, default: false},
    isOnline:           {type: Boolean, default: true},
    isDisabled:         {type: Boolean, default: false},
    isRestricted:       {type: Boolean, default: false}

}, {timestamps: true})

// ==================================
// ==== static functions for Auth ===
// ==================================

// signup user function
alumniSchema.statics.signup = async function (fullName, emailAddress, matricNo, password) {

    // check if all inputs are filled
    if(!fullName || !emailAddress || !password || !matricNo) {
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
    const alumni = await this.create({fullName, emailAddress, matricNo, password: hash})

    // returning the saved user
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
        text: message

    }, (err, sent)=>{    
        err ? console.log('error send email') : console.log('succesfully sent', sent)     
    
    })
}


// ==================================
// ==== modeling alumni with schema==
// ==================================
const Alumni = mongoose.model('alumni', alumniSchema)

// ==================================
// ======== exports =================
// ==================================
module.exports = Alumni