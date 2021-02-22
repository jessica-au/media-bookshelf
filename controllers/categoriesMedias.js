const express = require('express');
const router = express.Router();
const unirest = require('unirest');
require('dotenv').config();

// import database
const db = require('../models');
const category = require('../models/category');

// POST routes - posting relationship of category/media

router.post('/', (req, res) => {
    console.log(req.body);
    // db.categoriesMedias.create({
    //     mediaId: req.body.mediaId,
    //     categoryId: req.body.categoryId,
    //     userId: req.user.id,
    // })
    // .then((createdCategoriesMedias) => {
    //     console.log('Created CategoriesMedias = ', createdCategoriesMedias);
    //     res.redirect('/category')
    // });
    db.category.findOne({
        where: {
            id: req.body.categoryId,
    }}
    ).then((currentCategory) => {
        console.log('Created currentCategory = ', currentCategory);
        db.media.findOne({ where: 
                { id: req.body.mediaId}
            }).then( (currentMedia) =>{
                console.log('Created currentMedia = ', currentMedia);
                currentCategory.addMedia(currentMedia)
                res.redirect('/categories')
            })
    });
});



module.exports = router;
