const express = require('express');
const router = express.Router();
const unirest = require('unirest');
require('dotenv').config();

// import database
const db = require('../models');
const category = require('../models/category');

// POST routes - posting relationship of category/podcast

router.post('/', (req, res) => {
    //console.log(req.body);
    // db.categoriesPodcasts.create({
    //     podcastId: req.body.podcastId,
    //     categoryId: req.body.categoryId,
    //     userId: req.user.id,
    // })
    // .then((createdCategoriesPodcasts) => {
    //     console.log('Created CategoriesPodcasts = ', createdCategoriesPodcasts);
    //     res.redirect('/categories')
    // });
    db.category.findOne({
        where: {
            id: req.body.categoryId,
        }
    }
    ).then((currentCategory) => {
        console.log('Created currentCategory = ', currentCategory);
        
        db.podcast.findOne({
            where:
                { id: req.body.podcastId }
        }).then((currentPodcast) => {
            console.log('Created currentPodcast = ', currentPodcast);
            
            currentCategory.addPodcast(currentPodcast).then((currentRel) => {
                console.log('Created currentRel = ', currentRel);

                res.redirect('/categories')
            })
        })
    });
});



module.exports = router;
