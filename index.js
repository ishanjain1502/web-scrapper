const PORT = 3030;
const axios = require('axios');
const cheerio = require('cheerio');

const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())

const url = ''; // ADD URL to be SCRAPED HERE 

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('// add the class here which you want to find ', html).each(function () {
            // Fields you want to scrape
            const pageUrl = $(this).find('a').attr('href')
            articles.push({
                pageUrl
            })
        })
        console.log(articles);
    }).catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
