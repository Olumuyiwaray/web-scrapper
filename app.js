const express = require('express');

const app = express();

const port = 3000;

const cheerio = require('cheerio');



app.get('/', async (req, res) => {
    try {
        let url = 'https://w3schools.com';
        let data = await fetch(url)
        const $ = cheerio.load(data);
        res.json($('p').text());
    } catch (error) {
        console.log(error);
    }
})




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})