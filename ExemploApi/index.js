const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
let nomes = [];

app.get('/', (req, res) => {
  res.json(nomes)
})


app.post('/exercicio', (req, res) => {
  const tipo = req.body.type;
  const temp = req.body.temperatura;
  
  if (tipo === 'c') {
    const resultado = (temp * 9/5) + 32;
    res.json({ resultado: resultado, unidade: 'Fahrenheit' });
  } else if (tipo === 'f') {
    const resultado = (temp - 32) * 5/9;
    res.json({ resultado: resultado, unidade: 'Celsius' });
  } else {
    res.status(400).json({ error: 'Tipo de conversão inválido. Use "c" para Celsius ou "f" para Fahrenheit.' });
  }
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

