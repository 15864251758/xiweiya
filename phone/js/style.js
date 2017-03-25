$(function(){
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
    jQuery(".slideTxtBox").slide();
    $('.nav>li').click(function(){
        if ($('.nav li ul').css("display")=="none") {
            $('.nav li ul').fadeIn();
        }else{
            $('.nav li ul').fadeOut();
        }
    })

})