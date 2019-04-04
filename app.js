const express = require('express');
const app = require('express')();
const http = require('http').Server(app);


app.set('view engine', 'ejs');//Görüntü motoru
app.use('/views', express.static(__dirname + '/views'));


app.get('/', (req, res) => {
    res.render('index');
});

http.listen(process.env.PORT || 1337, () => {
    console.log('1337 Portundan sunucu baslatildi.');
});