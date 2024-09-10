const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/controller');

router.get('/user/areaAdministrativa', usuarioController.listarUsuarios);
router.get('/cadastrar', (req, res) => {res.render('cadastro');});
router.post('/cadastrar', usuarioController.cadastrarUsuario);
router.post('/user/excluir/:id', usuarioController.excluirUsuario);
router.post('/', usuarioController.paginaPrincipal);
module.exports = router;
