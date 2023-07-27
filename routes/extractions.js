const { Router } = require('express');
const { dataExtraction } = require('../controllers/extractions');

const router = Router();


router.get('/', dataExtraction);



module.exports = router;