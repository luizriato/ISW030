const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoute = require('./src/routes/userRoute')
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(userRoute)
app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})

let url = 'mongodb+srv://LuizRiato:cPm0EQ0bQ3Wbf7Jr@cluster0.j8nksa9.mongodb.net/?retryWrites=true&w=majority&appName=persistenciaDados';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.Promise = global.Promise;
let db = mongoose.connection;
mongoose.connect(mongoDB);
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB'));
