const router = require('express').Router()
const user = require('./user')
const comics = require('./comic')
const authentic = require('../middleware/authen')

router.use('/user', user)
// router.use(authentic)
router.use('/comics', comics)

module.exports = router
