const express = require('express');
const router = express.Router();
const unirest = require('unirest');
require('dotenv').config();

// import database
const db = require('../models');
const category = require('../models/category');

router.get('/', (req, res) => {
    if (req.user) {
        db.media.findAll({
            where: {
                userId: req.user.id
            }
        }).then(response => {
            res.render('media', {
                medias: response
            })
        })
    }
    else {
        console.log('must be signed in to access this page');
        res.redirect('auth/login')
    }


})

router.post('/', (req, res) => {
    console.log(req.body);
    db.media.create({
        mediaName: req.body.mediaName,
        mediaUrl: req.body.mediaUrl,
        userId: req.user.id,
    }).then((response) => 
        res.redirect('/media')
    )
})




module.exports = router;
