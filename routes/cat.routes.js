const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat.controller')



router.get('/', catController.read);
router.post('/add', catController.create);
router.put('/update/:id/:name', catController.update);
router.delete('/delete/:index', catController.deleteCat);


  
module.exports = router;