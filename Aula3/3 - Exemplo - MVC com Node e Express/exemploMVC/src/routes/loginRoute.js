const express = require('express')
const router = express.Router()

const loginController = require('../controllers/loginController')

router.get("/login", loginController.getLogin)
router.get('/logged', loginController.getIsLogged)
router.post("/create", loginController.createUser);
router.post('/user/:id', loginController.getbyId);
module.exports = router