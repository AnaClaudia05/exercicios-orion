const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hellooooooo from Docker! Editado pela mim msm: Aninha.');
});

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});