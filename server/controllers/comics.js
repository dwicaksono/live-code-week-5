const Model = require('../models')
const Comics = Model.Comic

class ControllerComic {

  static comicAll(req, res, next) {
    Comics
      .findAll()
      .then(resultComic => {
        res.status(200).json(resultComic)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static comicUpdate(req, res, next) {
    let id = req.params.id
    let { title, author, imageURL } = req.body
    Comics
      .update({ title, author, imageURL }, { where: { id: id }, returning: true })
      .then(result => {

        if (result) {
          res.status(200).json(result)
        } else {
          let err = {
            statusCode: '404',
            message: 'Not Found'
          }
          next(err)
        }
      })
      .catch(err => {
        if (err.message != 0) {
          err.statusCode = '400'
        } else {
          err.statusCode = '500'
        }
        next(err)
      })
  }


}




module.exports = ControllerComic