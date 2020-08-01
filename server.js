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
app.use(express.urlencoded({ extended: false }));

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

app.post('/contact/send-message',  (req, res) => {
    
    const { author, sender, title, image, message } = req.body;

    if(author && sender && title && image && message) {
        res.render('contact', { isSent: true, imageTitle: image });
    }
    else {
        res.render('contact', { isError: true });
    }
});

// app.post('/contact/send-message', (req, res) => {
    
//     const { author, sender, title, message } = req.body;

//     if(author && sender && title && message) {
//         res.send('The message has been sent ! : )');
//     }
//     else {
//         res.send('You can\'t leave fields empty')
//     }
// });

app.use((req, res) => {
  res.status(404).send("404 not found...");
});

app.listen(8000, () => {
  console.log("Server is running on port: 8000");
});
