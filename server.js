const express = require('express')
const app = express()
const port = 8080


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));

// set view engine to ejs
app.set('view engine', 'ejs');

//index page
app.get('/', (req, res) => {
  let name = 'Thije';

  res.render('pages/index', {
    name: name
  });
});

//login page
app.get('/login', (req, res) => {
  res.render('pages/login');
});

//sign up page
app.get('/sign-up', (req, res) => {
  res.render('pages/sign-up');
});

//create-profile page
app.get('/create-profile', (req, res) => {
  res.render('pages/create-profile');
});