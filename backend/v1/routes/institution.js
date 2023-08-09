// ==============================
// ===== library required ======
// =============================
const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/institution')

// =============================
// ======= routes ==============
// ============================= 
router.route('/')
    .get(controller.getAllInstitutions)
    .post(controller.registerInstitution)

router.route('/login')
    .post(controller.loginInstitution)

router.route('/:id/verify')
    .post(controller.verifyInstitution)    

module.exports = router