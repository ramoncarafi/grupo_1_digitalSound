const express = require('express');
const app = express();
const path = require('path');
const serverPort = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(serverPort, () => {
    console.log("Servidor funcionando OK en el puerto", serverPort)
    console.log("Ir al sitio Web de Digital Sound: http://localhost:" + serverPort + "/" )
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
})

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'))
})