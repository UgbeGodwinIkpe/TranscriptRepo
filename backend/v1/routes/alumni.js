// =================================
// ===== required libraries ========
// =================================
const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/alumni'),
    {isAuth} = require('../middleware/auth')

// =================================
// ==== retrieve all Alumnus =======
// ==== create new Alumni ==========
// ================================= 
router.route('/')
    .get(isAuth, controller.getAllAlumnus)
    .post(controller.createAlumni)


router.route('/login')
    .post(controller.loginAlumnus)
    
    
// ==================================
// === get single alumni ============
// === update alumni details ========
// === delete alumni ================
//  =================================
router.route('/:id')
    .get(controller.getAlumniById)
    .patch()
    .delete(controller.deleteAlumni)

router.route('/:alumniId/:verificationCode')
    .patch(controller.verifyAlumnus)

module.exports = router