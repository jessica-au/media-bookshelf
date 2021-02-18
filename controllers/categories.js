const express = require('express');
const router = express.Router();
const unirest = require('unirest');

// import database
const db = require('../models');

// router.get('/', (req, res) => {
//    // res.render('categories')
// });

router.get('/', async (req, res) => {
    try {
        var listenNotesUrl = 'https://listen-api.listennotes.com/api/v2';
        let response = await unirest.get('https://listen-api.listennotes.com/api/v2/search?q=star%20wars')
            .header('X-ListenAPI-Key', 'c61dffbeb6c54d508b1f8b24caa1c986')
        response = await response.toJSON();
        let podcastResults = response.body.results;
        console.log(podcastResults[0])
        res.render('categories', { podcastResults })
    } catch (e) {
        console.log(e)
    }
});
module.exports = router;