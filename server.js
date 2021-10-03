// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
  // console.log(new Date().getTime().toString());
  // let unix_time = 1633166161851;
  // let tanggal = new Date(unix_time);
  // console.log("ini tanggal: " + tanggal )
  // let jam = tanggal.getHours();
  // let menit = "0"+tanggal.getMinutes();
  // let detik = "0"+tanggal .getSeconds();
  // let formatJam = jam + ":"+menit.substr(-2)+":"+detik.substr(-2);
  // console.log(formatJam);
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


let PORT = 3000
// listen for requests :)
var listener = app.listen(process.env.PORT||PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get('/api/', function (req, res) {  
  let unix = new Date().getTime()
  // console.log(typeof(unix));
  let utc = new Date().toUTCString();
  // console.log(typeof(utc));
  res.json({
    unix,
    utc 
  })
})

app.get('/api/:input', function (req, res) {
  let input = req.params.input;
  if(input.includes('-')){
    if(input.length >= 11){
      res.json({
        error: new Date(input).toUTCString()
      });
    }else {
      unix = new Date(input).getTime();
      utc = new Date(input).toUTCString();
      res.json({
        unix,
        hadeh: "error",
        utc
      });
    };
  } else {
    input = parseInt(input);
    unix = new Date(input).getTime();
    utc = new Date(input).toUTCString();
    res.json({
      unix,
      utc
    })
  }
})