const controllerComic = require('../controllers/comics')
const router = require('express').Router()



router.get('/', controllerComic.comicAll)
router.put('/:id', controllerComic.comicUpdate)

module.exports = router

