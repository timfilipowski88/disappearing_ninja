$(document).ready(function(){
    //Grab image and hide
    $('img').click(function() {
        $(this).hide();
    });
    //Show all images
    $('button').click(function() {
        $('img').show();
    });
});