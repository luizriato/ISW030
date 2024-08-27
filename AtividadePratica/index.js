const express = require('express')
const app = express()
const listarRoute = require('./src/routes/listarRoute')
app.use(listarRoute)
app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, function(){
    console.log('server works')
})
