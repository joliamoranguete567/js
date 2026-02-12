const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Servidor Express ok, teste. TW');
});

app.listen(3000, () => {
    console.log('Servidor em localhost:3000');
});

//node index.js