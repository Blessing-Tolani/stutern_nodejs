var express = require('express')
var router = express.Router()

/* Create user */
router.post('/', function (req, res, next) {
  let user = req.body
  res.status(200).json({
    message: 'User successfully created',
    user,
  })
})

module.exports = router
