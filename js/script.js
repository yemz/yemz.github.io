
//roll over active navbar
$(document).ready(function(){
    $('.nav li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    });

});

//scroll to top when Home is clicked
$("a[href='#home']").click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});
