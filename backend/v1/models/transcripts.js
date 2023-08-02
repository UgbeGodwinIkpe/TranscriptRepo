// imports
const mongoose = require('mongoose')


// transcript schema
const transcriptSchema = new mongoose.Schema({

    referenceId:            {type: String, required: true, unique: true},
    degreeType:             {type: String, required: true},
    institution:            {type: String, required: true},
    faculty:                {type: String, required: true},
    department:             {type: String, required: true},
    matricNumber:           {type: String, required: true},
    yearOfGraduation:       {type: Date, required: true},
    program:                {type: String, required: true},
    modeOfDelivery:         {type: String},
    recipientEmail:         {type: String},
    recipientAddress:       {type: String},
    recipientPhoneNumber:   {type: Number},

    isSubmitted:            {type: Boolean, default: false},
    isVerified:             {type: Boolean, default: false},
    isPaid:                 {type: Boolean},
    isApproved:             {type: Boolean, default: false},
    isQuerried:             {type: Boolean, default: false},

    createdBy:              {type: mongoose.Schema.Types.ObjectId},

    verfiedBy:              {type: mongoose.Schema.Types.ObjectId},
    approvedBy:             {type: mongoose.Schema.Types.ObjectId},
    querriedBy:             {type: mongoose.Schema.Types.ObjectId},
    declinedBy:             {type: mongoose.Schema.Types.ObjectId},


}, {timestamps: true})

// modelling transcript schema
const Transcripts = mongoose.model('transcript', transcriptSchema)

// exporting transcript
module.exports = Transcripts