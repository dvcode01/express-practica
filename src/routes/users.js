// Routes
const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.send('profile page')
})


router.get('/users', (req, res) => {
    const title = 'Users';
    const header = 'users';

    res.render('users', {title, header});
})

module.exports = router;