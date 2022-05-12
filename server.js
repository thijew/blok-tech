const express = require('express')
const app = express()
const port = 8080


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.use(express.static('public'));

// set view engine to ejs
app.set('view engine', 'ejs');

//index
app.get('/', (req, res) => {
  res.render('pages/index');
});

//about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});