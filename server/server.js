const express = require('express'); //express gives us a function
const bodyParser = require('body-parser'); //body parser 'parses' through data and sends it in a little package

const app = express(); //create an instance of express by calling the function
const PORT = 5000; //the port we are operating on/through

app.use(express.static('server/public')); //serves up our static files

app.use(bodyParser.urlencoded({extended: true})); //allows us to find data via urls




app.listen(PORT, () => { //tells us the port is open for business
    console.log('Up and running on port:', PORT); //keep this console.log so you know the port is working
  });