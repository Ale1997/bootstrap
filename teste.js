$(document).ready(function() {

$('#like').on('click', function(){
    $('#feedback-body').slideDown(500);
    $('#close-fb').show();
    $('#open-fb').hide();
    $('#feedback-header').css("width", "fit-content");
  })

});