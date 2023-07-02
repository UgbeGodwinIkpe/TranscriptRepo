// =================================
// ===== required libraries ========
// =================================
const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/alumni')

// =================================
// ==== retrieve all Alumnus =======
// ==== create new Alumni ==========
// ================================= 
router.route('/')
    .get()
    .post(controller.createAlumni)

// ==================================
// === get single alumni ============
// === update alumni details ========
// === delete alumni ================
//  =================================

router.route('/:id')
    .get()
    .patch()
    .delete()

module.exports = router