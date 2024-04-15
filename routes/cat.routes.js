const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat.controller')



router.get('/', catController.read);
router.post('/add/:id/:name', catController.create);
router.put('/update/:id/:name', catController.update);
router.delete('/delete/:id', catController.deleteCat);

module.exports = router;