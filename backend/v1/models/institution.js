// =================================
// ======= libararies required =====
// =================================
const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    validator = require('validator'),
    nodemailer = require('nodemailer') ,
    smtpTransport = require('nodemailer-smtp-transport')

// =======================================
// ====== Institution Schema =============
// =======================================

const institutionSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    emailAddress: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    transcriptTypes: [],
    staff: [],
    isActive: {type: Boolean, default: false},
    isVerified: {type: Boolean, default: false}

}, {timestamps: true})


// =============================================
// ======= statics functions ===================
// =============================================

institutionSchema.statics.signup = async function (name, emailAddress, location, password, verfificationCode) {
    // check if all inputs are filled
    if(!name || !emailAddress || !location || !password){
        throw Error('All fields are required !')
    }

    // use validator to validate email
    if(!validator.isEmail(emailAddress)){
        throw Error('email is not valid')
    }

    // use validator check if password is strong enough
    if(!validator.isStrongPassword(password)){
        throw Error('password is not strong enough')
    }

    // check if email exists in database
    const exists = await this.findOne({emailAddress}) 

    // throw error if email already exists
    if(exists){
        throw Error('email already in use !')
    }

    // check if name exists in database
    const nameExists = await this.findOne({name})

    // throw error if name already exists
    if(nameExists){
        throw Error('name already exists in our database')
    }

    // generating salt to hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    // saving instition in database
    const instition = await this.create({name, emailAddress, location, password: hash, verfificationCode})

    // returning saved institution as json
    return instition
}


// ======= modeling schema =====================
const Institution = mongoose.model('institution', institutionSchema)

module.exports = Institution
