const express = require('express');
const Usuario = require('../models/model');

const app = express();

app.get('/contar-emails', (req, res) => {
    const quantidadeEmails = Usuario.contarEmails();
    res.json({ quantidadeEmails });
});

app.listen(3001, () => {
    console.log('Microserviço rodando na porta 3001');
});
