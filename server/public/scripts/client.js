console.log('js');

$(document).ready(onReady);

let operator = '';
let total = '';

function onReady(){
    console.log('jQuery');
    $(".operator").on("click", opFun);
    $("#submitButton").on('click', postNumbers); //click event to calculate calculation
    
}

function opFun(){
    operator = $(this).data('value');
    console.log('in operator function', operator);
}

function postNumbers(){
    let num1 = $('#num1').val();
    let num2 = $('#num2').val(); //inside ajax post in client inside of data object to send to the server

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
        // add getfunction here ();
    }).catch(function(error){
        alert(error);
    });
}
