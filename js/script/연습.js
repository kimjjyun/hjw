$('.menu li').mouseover(function(){
    $(this).children('.submenu').stop().slideDown()
})
$('.menu li').mouseleave(function(){
    $(this).children('.submenu').stop().slideUp()
})
$('.logo img').click(function(){
    $('.modal').show()
})
$('.modal').click(function(){
    $('.modal').hide()
})

start();
var now = 0;
var imgs = 2;
function start(){
    $('.main img').eq(0).siblings().css({'marginLeft':"-2000px"})
    setInterval(function(){slide();},2000)
}
function slide(){
    now=now==imgs?0:now+=1;
    $('.main img').eq(now-1).css({'marginLeft':"-2000px"})
    $('.main img').eq(now).css({'marginLeft':"0"})
}