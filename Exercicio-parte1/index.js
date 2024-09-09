const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const loginRoute = require('./src/routes/loginRoute')
const temperatureRoute = require('./src/routes/temperatureRoute')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginRoute)
app.use(temperatureRoute)
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