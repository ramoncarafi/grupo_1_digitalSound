const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3030, () => {
    console.log("Servidor funcionando")
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
})