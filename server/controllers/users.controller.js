const User = require('../models/users.model');

module.exports.findAllUsers = (req, res) => {
    User.find()
    .then((allUsers) => {
        res.json(allUsers)
    } )
    .catch((err) => [
        res.json(err)
    ]);
}

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
    .then(oneUser=> {
        res.json(oneUser)
    })
    .catch((err) => [
        res.json(err)
    ]);
}

module.exports.createNewUser = (req, res) => {
    const { comment, rating } = req.body;
    User.create( { comment, rating } )
    .then(newUser => {
        res.json (newUser)
    })
    .catch((err) => {
        res.status(400).json(err)
    });
}

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json( updatedUser )
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}