const express = require("express");
const path = require("path");

const app = express();
const hbs = require('express-handlebars');


app.engine('hbs', hbs());
app.set('view engine', '.hbs');

// app.use((req, res, next) => {
//   res.show = (name) => {
//     res.sendFile(path.join(__dirname, `/views/${name}`));
//   };
//   next();
// });

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", (req, res) => {
  res.render('index');
});

app.get('/hello/:name', (req, res) => {
    res.render('hello', { name: req.params.name});
});

app.get("/about", (req, res) => {
  res.render('about', { layout: 'darkMain'});
});

app.get("/contact", (req, res) => {
  res.render('contact');
});

app.get("/info", (req, res) => {
  res.render('info');
});

app.get("/History", (req, res) => {
  res.render('history', { layout: 'darkMain2'});
});

// app.get('/hello/:name', (req, res) => {
//     res.send(`Witaj ${req.params.name}`);
// });


app.use((req, res) => {
  res.status(404).send("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
