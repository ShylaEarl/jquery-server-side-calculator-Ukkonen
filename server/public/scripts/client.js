console.log('js');

$(document).ready(onReady);

let operator = '';
// let total = '';

function onReady(){
    console.log('jQuery');
    $('.operator').on('click', opFun); //click event to select calculation operator
    $('#submitButton').on('click', postNumbers); //click event to do the math
    $('#clearButton').on('click', clearInput); //click event to clear number inputs
    $('#submitButton').on('click', getCalcTotal); //click event to post calculation total to DOM
}

function clearInput(){
    $('#num1').val('');
    $('#num2').val('');
}

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
        // add getfunction here (); ?? from function below  
    }).catch(function(error){
        alert(error);
    });
}

// get mathObject data from the server
function getCalcTotal() {
    $.ajax({
        type: 'GET',
        url: '/submitNumbers'
    }).then(function (response) {
        console.log('response', response);
        // append data to the DOM at #calculationTotal
        
    });
}

function appendCalcHistory(){
    $("#calculationHistory").empty();
        for (let i = 0; i < response.length; i++) {
            let math = response[i]; //math or mathObject in the string interpolation?
            $('#calculationHistory').append(`
                <ul>
                    <li>${math.num1}</li>
                    <li>${math.num2}</li>
                    <li>${math.operator}</li>
                    <li>${math.total}</li>
                </ul>
            `);
        }
}