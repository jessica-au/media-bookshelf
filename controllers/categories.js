const express = require('express');
const router = express.Router();
const unirest = require('unirest');

// import database
const db = require('../models');
const category = require('../models/category');

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
        // use the passport helper to pass a user to render
        
        db.category.findAll({where: {
            userId: 1}}).then(response => {
            res.render('categories', { podcastResults, 
                categories: response,
                user: { id: 1 } })
        })
        console.log(podcastResults[0])
    } catch (e) {
        console.log(e)
    }
});

//post methods

router.post('/', (req, res) => {
    console.log(req.body);
    db.category.create({
        name: req.body.category,
        userId: req.body.userId
    }).then(response => {
        console.log(response);
        res.redirect('/categories');
    })
})


module.exports = router;