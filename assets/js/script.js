
     $("#currentDay").html(moment().format('ddd MMM Do, YYYY'));





     /*WIP for coloring
    function applyclass()
{
var d = new Date();
var n = moment().getHours;
if (n > 19)
// If time is 7PM or later apply night theme to 'body'
$('button').addClass('night');
else if (n > 16 && n < 19)
// If time is between 4PM – 7PM sunset theme to 'body'
$('button').addClass('sunset');
else
// Else use 'day' theme
$('button').addClass('day');
}
window.onload = applyclass;
*/

///save function to local storage start///

$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});



