const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html')); // relative path
});

app.listen(3000, () => {
    console.log("Server is running")
});