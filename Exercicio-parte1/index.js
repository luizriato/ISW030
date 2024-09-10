const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const rota = require('./src/routes/route')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(rota)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.static('img'));

app.set('view engine', 'ejs')
app.set('views', './src/views/')

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
})

app.listen(3000, function () {
    console.log('App rodando na porta 3000')
})