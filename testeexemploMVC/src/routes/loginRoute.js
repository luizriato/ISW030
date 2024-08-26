const express = require('express')
const router = express.Router()
const loginController = require('../controller/loginController')
router.get("/logged", loginController.getIsLogged)
router.get("/login",loginController.getLogin)
module.exports = router