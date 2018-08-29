const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');

//setting up routes and calling them
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/project');
app.use(mainRoutes);
app.use("/project", projectRoutes);

//error middleware. loads a page with the error message and error status
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error',);
});
//used to use the port the server is wanting to use. but will default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    const date = new Date();
    console.log(`server listening on port ${port}`);
});