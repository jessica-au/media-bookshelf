const db = require('../models')

// // firstName: DataTypes.STRING,
// // lastName: DataTypes.STRING,
// // age: DataTypes.INTEGER,
// // email: DataTypes.STRING

db.user.create({
    name: 'Jessica',
    email: 'au.jessica.m@gmail.com',
    password: 'abcd1234',
})
    .then(newUser => {
        console.log(newUser);
        newUser.createCategory({
            name: 'Car Rides'
        })
            .then(newCategory => {
                console.log(newCategory)
            })
    })