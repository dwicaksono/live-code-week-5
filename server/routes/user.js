const controllerUser = require('../controllers/user')
const router = require('express').Router()



router.get('/login', controllerUser.login)
router.post('/register', controllerUser.register)

module.exports = router

