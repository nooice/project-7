const express = require('express');
const router = express.Router();
const { data } = require('../data/myInfo.json');
const { projects } = data;

//renders the project page based on the requested project.
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const index = id - 1;
    //checks to make sure the requested path is an actual project. if true it loads the page else error page
    if (index >= 0 && index < projects.length) {
        const project = projects[index];
        res.render('project', { project });
    } else {
        const err = new Error('Not Found');
        err.status = 404;
        res.locals.error = err;
        res.status(err.status);
        res.render("error");
    }
});

module.exports = router;