// ===========================
// === libraries requires ====
// ===========================
require('dotenv').config()
const jwt = require('jsonwebtoken'),
    Alumni = require('../models/alumni')


//=============================
// === auth permissions =======
// ============================

// function to check if user is authenticated
exports.isAuth = async (req, res, next) => {

    // distructure auth from request headers
    const { authorization } = req.headers

    try {
        // if not available throw error 
        if(!authorization){
            throw Error('Authorization token required')
        }

        // getting token from auth
        const token = authorization.split(' ')[1]

        // destructuring and getting _id from verified jwt
        const {_id} = jwt.verify(token, process.env.SECRET_KEY)
        
        // searhing db and geting user using _id and assigning to req.user
        req.user = await Alumni.findOne({ _id }).select('_id')

        // if bot found throw error
        if(!req.user){
            throw Error('token not accessible')
        }

        // call th enext set of function
        next()

    } catch (error) {
        // catch all errors and send as json
        res.status(401).json({error: 'Request is unauthorized', message: error.message})
    }

}

module.exports = exports