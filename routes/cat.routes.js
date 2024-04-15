const express = require('express')
const router = express.Router()
const catController = require('../controllers/cat.controller')



router.get('/', catController.read)
router.get('/add/:name', catController.create)
router.post('/add', catController.post)

module.exports = router