const db = require('../models')

// // firstName: DataTypes.STRING,
// // lastName: DataTypes.STRING,
// // age: DataTypes.INTEGER,
// // email: DataTypes.STRING

// db.user.create({
//     name: 'Jessica',
//     email: 'au.jessica.m@gmail.com',
//     password: 'abcd1234',
// }).then(newUser => {
//         console.log(newUser);

//         newUser.createCategory({
//             name: 'Car Rides'
//         }).then(newCategory => {
//                 console.log(newCategory)
//             })
//     })

// db.category.create({
//     name: "Commute",
//     userId: 1,
// });

// db.media.create({
//     name: "star wars",
//     userId: 1,
//     categoryId: 2, 
// });

// db.media.create({
//     name: "this american life",
//     userId: 1,
//     categoryId: 2, 
// });

db.user.findOne({ where: 
    { id: 1}
}).then(user => {
    console.log(user.media);
    console.log(user.category);
})