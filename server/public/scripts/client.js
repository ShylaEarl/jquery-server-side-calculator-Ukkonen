console.log('js');

$(document).ready(onReady);

let operator = ''; //variable for opFun to take in operator values

function onReady(){
    console.log('jQuery');
    $('.operator').on('click', opFun); //click event to select calculation operator
    $('#submitButton').on('click', postNumbers); //click event to do the math
    $('#clearButton').on('click', clearInput); //click event to clear number inputs
    getCalcTotal(); //posts calculation total to DOM
}

//clear input values
function clearInput(){
    $('#num1').val('');
    $('#num2').val('');
}

//creates operator function 
function opFun(){
    operator = $(this).data('value');
    console.log('in operator function', operator);
}

function postNumbers(){
    //grabbing value (or input) from the DOM
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    //send data to server via post request
    $.ajax({
        method: 'POST',
        url: '/submitNumbers',
        data: {
            num1: num1,
            num2: num2,
            operator: operator
        }
    }).then(function(response){
        console.log('response', response)
        getCalcTotal();
    }).catch(function(error){
        alert(error);
    });
}

// get calculation total from the server and
function getCalcTotal() {
    $.ajax({
        type: 'GET',
        url: '/submitNumbers'
    }).then(function (response) {
        console.log('response', response);
        // append calculation total to DOM
        $('#calculationTotal').empty(); 
        if(response.length > 0){ //this prevents a console error on page load since a response does not exist on page load
            $('#calculationTotal').append(response[response.length -1].total);
        }    
        appendCalcHistory(response);
    });
    
}

//lists calculation history on the DOM
function appendCalcHistory(response){
    $("#calculationHistory").empty();
        for (let i = 0; i < response.length; i++) {
            let math = response[i];
            $('#calculationHistory').append(`
                <li>${math.num1} ${math.operator} ${math.num2} = ${math.total}</li>
            `);
        }
}