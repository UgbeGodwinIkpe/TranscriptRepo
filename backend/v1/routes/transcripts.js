const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/transcript')

router.route(`/`)
    .get(controller.getAllTranscripts)
    .post(controller.createNewRequest)
    
module.exports = router