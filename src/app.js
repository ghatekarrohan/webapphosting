const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;

//public static path
const static_path = (path.join(__dirname, "../public"));
const templetes_path = (path.join(__dirname, "../templetes/views"));
const partials_path = (path.join(__dirname, "../templetes/partials"));

app.set('view engine', 'hbs');
app.use(express.static(static_path));
app.set('views', templetes_path);
hbs.registerPartials(partials_path);

// routing

app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error')
});

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});