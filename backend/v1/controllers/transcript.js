// imports
const Transcripts = require('../models/transcripts')

const generateRefrenceId = () =>{
    return `T-001`
}

exports.getAllTranscripts = async (req, res) => {
    let response = await Transcripts.find({})
    return res.json(response)
}

exports.createNewRequest = async (req, res) => {
    try {

        // destructuring req body
        const {institution} = req.body

        // generate refrenceId
        const lastId = await Transcripts.findOne().sort({ _id: -1 }) 



        if(!lastId) {
            let newId = await generateRefrenceId(institution)
            return res.json(newId)
        }

        const splitted = await lastId.split('-') 

        return res.json(splitted)

        // check if all required data are filled
        if(!referenceId || degreeType || institution || !faculty || !department || !matricNo || !yearOfGraduation || !program){
            throw Error('All fields are required')
        }

        // getting userid from middleware
        const createdBy = req.user._id

        // creating new transcript request

    } catch (error) {
        return res.json(error.message)
    }
}

module.exports = exports