const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('dist'));

app.get('/api/corona/country', (req, res) => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
    .then(res => res.json())
    .then(json => res.send(json));
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html')); // relative path
});


app.listen(3000, () => {
    console.log("Server is running")
});