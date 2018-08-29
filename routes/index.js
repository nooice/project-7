const express = require('express');
const router = express.Router();
const { data } = require('../data/myInfo.json');
const { projects } = data;
const { profile } = data;
//root, renders index page
router.get('/', (req, res) => {
    res.render('index', { projects });
});
//rendors about page and sends profile data to pug file
router.get('/about', (req, res) => {
    res.render('about', { profile });
});

//redirects the projects path to root where the lists of projects
router.get('/projects', (req, res) => {
    res.redirect('/');
});
//I kept accidentally requesting projects instead of project and would error out on one. so i set a redirect for both
router.get('/project', (req, res) => {
    res.redirect('/');
});

module.exports = router;