//import nessecary modules
const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);
const port = 3000


const bodyParser = require("body-parser");
const cors = require('cors')

//Import players modules
const playerRoutes = require('./routes/players');
const authRoutes = require('./routes/auth');

app.use("/players", playerRoutes);
app.use("/auth", authRoutes);

//Set app to use above modules
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({extended: false,})); // support encoded bodies
app.use(cors())


app.get('/', (req, res) => {
  res.write(`<h1> Listening on port: ${port} `);
  res.send('Hello World!');
})



//Start app,listen on port 3030
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  module.exports = {io}