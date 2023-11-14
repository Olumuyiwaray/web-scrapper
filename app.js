// Require installed dependencies

const express = require('express');

const bodyParser = require('body-parser');

const axios = require('axios');

const isUrl = require('is-url');

const port = process.env.port || 3000;

const cheerio = require('cheerio');

const app = express();


// Configure express middlewares and template engines

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

app.set('views', './views');

app.set('view engine', 'ejs');




app.get('/', async (req, res) => {
  res.status(200).render('index', {title: 'Home'});
});


// post request to handle data coming from frontend
app.post('/scrape', async (req, res) => {
    const states = [];
    let url = req.body.input;
    console.log(url)

    if (isUrl(url)) {
        try {
        
        
            const selector = req.body.selector;
            console.log(selector)
            let data = await axios.get(url);
           const $ =  cheerio.load(data.data);
                $(selector).each((index, element) => {
                    /* Javascript string  methods replace and trim
                    are used in the code snippet below to replace
                    any line breaks with empty strings and remove
                    any whitespaces respectively */
                    const newData = $(element).text().replace(/\n/g, '').trim();
                    states.push(newData)
                })
               res.status(200).json(states)
                 
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json( {error: "Please input a valid url"} );
    }

  
});




app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})