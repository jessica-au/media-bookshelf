const express = require('express');
const router = express.Router();
const unirest = require('unirest');
require('dotenv').config();

// import database
const db = require('../models');
const category = require('../models/category');

//GET routes
router.get('/', (req, res) => {
    if (req.user) {
        db.podcast.findAll({
            where: {
                userId: req.user.id
            }
        }).then(podcastsResponse => {
            db.category.findAll({
                where: {
                    userId: req.user.id
                }
            }).then((categoryResponse) => {
                res.render('podcasts', {
                    podcasts: podcastsResponse,
                    categories: categoryResponse,
                })
            })
        })
    }
    else {
        console.log('must be signed in to access this page');
        res.redirect('auth/login')
    }


})

//POST routes - posting new podcast to database
router.post('/', (req, res) => {
    console.log(req.body);
    db.podcast.create({
        podcastName: req.body.podcastName,
        podcastUrl: req.body.podcastUrl,
        userId: req.user.id,
    }).then((response) =>
        res.redirect('/podcasts')
    )
})


//PUT routes - changing/updating podcast name
router.put('/:id', (req, res) => {
    db.podcast.update({ podcastName: req.body.name }, {
        where: {
            id: req.params.id
        }
    }).then((updatedPodcast) => {
        console.log('Updated podcast = ', updatedPodcast);
        res.redirect('/podcasts');
    })
})


//DELETE routes
router.delete('/:id', (req, res) => {
    db.podcast.destroy({
        where: {
            id: req.params.id
        }
    })
        .then((deleted) => {
            console.log('Deleted Podcast = ', deleted);
            res.redirect('/podcasts');
        })
})


module.exports = router;
