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



/////////Test profiel
const cookingProfile = [
        {
              id: '1',
              name: 'Piet Veen',
              age:  '24',
              countries: ['netherlands', 'german', 'french'],
              cookingSkills: ['meat', 'vegan']
        }
]

////////////////////////////////Mongo db////////////////////////////////

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://thijew:hQr@b@7kEz82hW4@blok-tech.ukeqi.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("blok-tech").collection("cookingmatch");
console.log("succes");
console.log(err)
  
});
/////////////////////////////////////////////////////////////////////////