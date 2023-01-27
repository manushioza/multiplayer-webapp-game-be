//import nessecary modules
const express = require('express')
var bodyParser = require("body-parser");
var cors = require('cors')
const app = express()
//Set port to 3030
const port = 3030

//Import players modules
const playerRoutes = require('./routes/players');
const authRoutes = require('./routes/auth');

//Set app to use above modules
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false,})); // support encoded bodies
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/players", playerRoutes);

app.get('/login', (req, res) => {
  res.send('Hello World!')
})
app.get('/register', (req, res) => {
  res.send('Hello World!')
})
app.use("/auth", authRoutes);

//Start app,listen on port 3030
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })