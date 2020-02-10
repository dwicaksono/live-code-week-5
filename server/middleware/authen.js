const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.token
  try {
    const user = jwt.verify(token, 'live')
    // console.log(user)
    req.user = user
    next()
  }
  catch (error) {
    res.status(404).json({ message: "Invalid Token" })
  }
} 