const {readFile} = require('fs');
const express = require('express');
const app = express();

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
      if(err){
        response.status(500).send("Sorry, something went wrong");
      }
      response.send(html);
    })
});
app.use(express.static("public"));

var rooms = [];


app.get('/rooms', function (req, res) {
  console.log("halleluuja")
  res.send(rooms)
});

app.post('/rooms', function(req, res){
  console.log(req.body.name);
  rooms.push(req.body);
  console.log(rooms);
  console.log(rooms, "555");
  res.sendStatus(200);
});


app.listen(process.env.PORT || 3000, () => console.log('App available on localhost 3000'));