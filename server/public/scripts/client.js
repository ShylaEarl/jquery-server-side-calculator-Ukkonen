console.log('js');

$(document).ready(onReady);

let num1 = '';
let num2 ='';
let operator = '';
let total = '';

function onReady(){
    console.log('jQuery');
    $("#submit").on('click', submitCal);
}

function submitCal(num1, num2){
    console.log('in submit cal');
 if(num1)
}