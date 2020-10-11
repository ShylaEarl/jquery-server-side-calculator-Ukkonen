const express = require('express'); //express gives us a function
const bodyParser = require('body-parser'); //body parser 'parses' through data and sends it in a little package

const app = express(); //create an instance of express by calling the function
const PORT = 5000; //the port we are operating on/through

let calculationHistory = [];

app.use(express.static('server/public')); //serves up our static files

app.use(bodyParser.urlencoded({extended: true})); //allows us to find data 'bundles' via urls

app.post('/submitNumbers', (req, res) => {
  console.log('hello from post', req.body);
  let mathObject = req.body;
  console.log('math object', mathObject);
  mathObject.total = submitCal(mathObject);
  calculationHistory.push(mathObject);
  console.log('calculation history', calculationHistory);
  res.sendStatus(200);
});

function submitCal(mathObject){
    console.log('in submit cal');
    let num1 = mathObject.num1;
    let num2 = mathObject.num2;
  switch (mathObject.operator){
      case '+':
          total = +num1 + +num2;
          return total;
      case '-':
          total = +num1 - +num2;
          return total;
      case '*':
          total = +num1 * +num2;
          return total;
      case '/':
          total = +num1 / +num2;
          return total;
    }
}

app.get('/submitNumbers', (req, res) => {
  res.send(calculationHistory);
});

app.listen(PORT, () => { //tells us the port is open for business
    console.log('Up and running on port:', PORT); //keep this console.log so you know the port is working
  });