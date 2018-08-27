const express = require('express');
const router = express.Router();
const { data } = require('../data/myInfo.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects', (req, res) => {
    res.redirect('/');
});

router.get('/project', (req, res) => {
    res.redirect('/');
});

module.exports = router;