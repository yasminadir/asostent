// This is going to run on document ready
$(function(){
    $('#name').keyup(function(){
        $('#greeting').text('Hi, ' + $('#name').val() + '!');
    });
});