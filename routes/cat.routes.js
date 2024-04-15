const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat.controller')



router.get('/', catController.read);
router.post('/add', catController.create);


  
module.exports = router;