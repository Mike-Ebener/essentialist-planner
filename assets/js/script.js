
     $("#currentDay").html(moment().format('ddd MMM Do, YYYY'));





///save function to local storage start///

$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});



