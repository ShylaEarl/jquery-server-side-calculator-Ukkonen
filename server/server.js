const express = require('express'); //require express - gives us a function
const bodyParser = require('body-parser'); //body parser 'parses' through data from server? client? 

//create an instance of express by calling the function
//returned above - gives us an object
const app = express();
const PORT = 5000;

//express static file serving - public is the folder name
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));



// how to write an annonymous function. Also you need this to 'port' to the DOM
app.listen(PORT, () => {
    console.log('Up and running on port:', PORT); //keep this console.log so you know things are working
  });