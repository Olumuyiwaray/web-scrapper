const express = require('express');

const app = express();

const port = 3000;

const cheerio = require('cheerio');


app.set('view engine', 'ejs');

app.use('view', 'views');



app.get('/', async (req, res) => {
    try {
        let url = 'https://w3schools.com';
        let data = await fetch(url);
       const $ =  cheerio.load(data);

       console.log($);
        //res.json($('p').text());
    } catch (error) {
        console.log(error);
    }
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})