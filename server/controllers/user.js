const Model = require('../models')
const User = Model.User
var jwt = require('jsonwebtoken');

class ControllerUser {
  static login(req, res, next) {
    let email = req.body.email
    let password = req.body.password
    User
      .findOne({ where: { email: email } })
      .then(user => {
        if (!user) {
          res.status(401).json({ message: "Unauthorized" })
        } else {
          if (password === user.password) {
            const token = jwt.sign({ email: user.email, id: user.id }, "live")
            res.status(200).json(token)
          } else {
            res.status(401).json({ message: "Unauthorized" })
          }
        }
      })
      .catch(err => {
        res.status(404).json(err.message)
      })
  }

  static register(req, res, next) {
    let body = req.body
    User.create({
      name: body.name,
      email: body.email,
      password: body.password
    })
      .then(result => {
        const token = jwt.sign({ email: result.email, id: result.id }, "live")
        res.status(201).json(token)
      })
      .catch((err) => {
        if (err.message != 0) {
          err.statusCode = '400'
        } else {
          err.statusCode = '500'
        }
        next(err)
      })
  }


}

module.exports = ControllerUser

