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
// ==== send reset pwd link ========
// ==== reset password =============
// ================================= 
router.route('/')
    .get(isAuth, controller.getAllAlumnus)
    .post(controller.createAlumni)


router.route('/login')
    .post(controller.loginAlumnus)

router.route('/reset-password')
    .post(controller.forgotPassword)

router.route('/reset-password/:token')
    .post(controller.passwordReset)
    
    
// ==================================
// === get single alumni ============
// === update alumni details ========
// === delete alumni ================
//  =================================
router.route('/:id')
    .get(controller.getAlumniById)
    .patch()
    .delete(controller.deleteAlumni)

router.route('/:id/verify')
    .patch(controller.verifyAlumnus)

module.exports = router