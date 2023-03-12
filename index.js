//imPORTnessecary modules
const express = require('express');
const app = express();
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;


const bodyParser = require("body-parser");
const cors = require('cors')

//ImPORTplayers modules
const playerRoutes = require('./routes/players');
const authRoutes = require('./routes/auth');

app.use("/players", playerRoutes);
app.use("/auth", authRoutes);

//Set app to use above modules
app.use(bodyParser.json()); // supPORTjson encoded bodies
app.use(bodyParser.urlencoded({extended: false,})); // supPORTencoded bodies
app.use(cors())


app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('Hello World!');
})



//Start app,listen on PORT3030
server.listen(PORT, () => {
    console.log(`Example app listening on PORT: ${PORT}`)
  })

  module.exports = {io}