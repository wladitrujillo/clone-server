const express = require('express');
const router = express.Router();
const { save, getById, getAll, deleteById } = require('./controller')

router.route('/')
    .get(getAll)
    .post(save);

router.route('/:id')
    .get(getById)
    .delete(deleteById);

router.get('/checkalive', (req, res) => {
    console.log('checkalive');
    res.status(200).json({ message: 'Connected!' })
});

module.exports = router;
