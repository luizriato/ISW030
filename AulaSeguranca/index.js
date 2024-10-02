const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route.js')
 
app.use(express.json());
app.use(authRoute)
app.listen(3000, () => console.log('Servidor rodando na porta 3000.'));