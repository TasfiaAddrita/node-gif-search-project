// libraries
const express = require('express');
const exphbs = require('express-handlebars')

// app setup
const app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// middleware

// routes
app.get('/', (req, res) => {
    // set the gif url
    // const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245';
    // render the hello-gif view, passing the gifUrl into the view to be displayed
    // res.render('hello-gif', { gifUrl })
    console.log(req.query)
    res.render('home')
});

app.get('/greetings/:name', (req, res) => {
    // grab the name from the path provided
    const name = req.params.name;
    // render the greetings view with the name
    res.render('greetings', { name });
});

// start server
app.listen(3000, () => {
    console.log('gif search listening on port localhost:3000')
});