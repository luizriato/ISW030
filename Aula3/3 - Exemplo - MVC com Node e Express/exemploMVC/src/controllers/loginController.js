const loginModel = require('../models/loginModel')
const login = new loginModel()
const logged = login.isLogged()
/*
#swagger.tags = ['login']
#swagger.summary = 'Call some function'
#swagger.description = 'This endpoint will show if user is logged'
*/
exports.getLogin = ((req, resp) => {    
    resp.send(`<h1>${logged}</h1>`)
})
exports.getIsLogged = ((req, res) => {    
    res.render("loginView", { logged: logged })
})

exports.createUser = (req, res) => {
    //#swagger.tags = ['Create user']
    const { email, password } = req.body;
    // Assuming some user creation logic here
    res.status(200).json({ message: "User added successfully" });
};

exports.getbyId = (req, res) => {
    const filter = req.query.filter;
    const version = req.header('version');
    // Assuming some user retrieval logic here
    return res.status(200).send("Getting User");
};
