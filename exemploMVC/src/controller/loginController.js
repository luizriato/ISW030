const loginModel = require('../models/loginModel')
const logintModel = require('../models/loginModel')
const login = new loginModel()
const logged = login.isLogged()

exports.getLogin = ((req, resp) => {
    resp.send(`<H1>${login.isLogged()}<H1>`)
})

exports.getIsLogged = ((req, res) => {
    res.render("loginView", { logged: logged })
})
