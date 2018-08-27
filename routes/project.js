const express = require('express');
const router = express.Router();
const { data } = require('../data/myInfo.json');
const { projects } = data;

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const index = id - 1;
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