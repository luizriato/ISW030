const loginModel = require('../models/loginModel')
const login = new loginModel()
const logged = login.isLogged()

exports.getLogin = ((req, resp) => {    
    resp.send(`<h1>${logged}</h1>`)
})
exports.getIsLogged = ((req, res) => {    
    res.render("loginView", { logged: logged })
})