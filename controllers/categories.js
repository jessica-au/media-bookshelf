const express = require('express');
const router = express.Router();
const unirest = require('unirest');
require('dotenv').config();

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
            .header('X-ListenAPI-Key', APIKEY)
        response = await response.toJSON();
        let podcastResults = response.body.results;
        // use the passport helper to pass a user to render
        if (req.user) {
            db.category.findAll({
                where: {
                    userId: req.user.id
                }
            }).then(response => {
                res.render('categories', {
                    podcastResults,
                    categories: response
                })
            })
        }
        else {
            console.log('must be signed in to access this page');
            res.redirect('auth/login')
        }
        //console.log(podcastResults[0])
    } catch (e) {
        console.log(e)
    }
});

//post methods

router.post('/', (req, res) => {
    //console.log(req.body);
    // req.body.userId is undefined
    db.category.create({
        name: req.body.category,
        userId: req.user.id
    }).then(response => {
        console.log('this is the response')
        console.log(response);
        res.redirect('/categories');
    })
})


module.exports = router;