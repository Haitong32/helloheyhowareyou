$(document).ready(function(){
  // $('body').css('display', 'none');
  // $('body').fadeIn(1000);
$("#chinese").hide();
  $( "#gif2" ).click(function() {
    $(".photofeed").toggle();
    $("#chinese").toggle();
  });
  $( "#gif1" ).click(function() {
        $('body').toggleClass('bgimg');
    });
  $("#img1").hover(function(){
    $(".work").not("#work1").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img2").hover(function(){
    $(".work").not("#work2").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img3").hover(function(){
    $(".work").not("#work3").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img4").hover(function(){
    $(".work").not("#work4").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img5").hover(function(){
    $(".work").not("#work5").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img6").hover(function(){
    $(".work").not("#work6").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img7").hover(function(){
    $(".work").not("#work7").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img8").hover(function(){
    $(".work").not("#work8").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img9").hover(function(){
    $(".work").not("#work9").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img10").hover(function(){
    $(".work").not("#work10").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img11").hover(function(){
    $(".work").not("#work11").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img12").hover(function(){
    $(".work").not("#work12").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img13").hover(function(){
    $(".work").not("#work13").toggle();
    $(".work").toggleClass("bgwhite")
  });
  $("#img14").hover(function(){
    $(".work").not("#work14").toggle();
    $(".work").toggleClass("bgwhite")
  });

});
