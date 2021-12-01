$('.menu li').mouseover(function(){
    $(this).children('.submenu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp()
})


start();
var now = 0;
var imgs = 2;
function start(){
    $('.main img').eq(0).siblings().fadeOut(1000)
    setInterval(function(){slide();},2000)
}
function slide(){
    now = now==imgs?0:now+=1;
    $('.main img').eq(now-1).fadeOut(1000)
    $('.main img').eq(now).fadeIn(1000)
}



