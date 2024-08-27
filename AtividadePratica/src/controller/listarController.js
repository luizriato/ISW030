const listarModel = require('../models/listarModel')
const listar = new listarModel()
const enviar = enviar.enviarModel()

exports.getListar = ((req, resp) => {
    res.render("listar", { enviar: enviar })
})

exports.getEnviar = ((req, res) => {
    res.render("enviarDados", { enviar: enviar })
})
