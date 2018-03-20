$(document).ready(function(){
  // $('body').css('display', 'none');
  // $('body').fadeIn(1000);
$("#chinese").hide();
$("#video-1").hide();
$("#video-2").hide();
$("#video-6").hide();
// $("#img1-2").hide();
  $( "#gif2" ).click(function() {
    $(".photofeed").toggle();
    $("#headimg").toggle();
    $("#chinese").toggle();
  });
  $( "#gif1" ).click(function() {
      $('body').toggleClass('bgimg');
    });
  $('#play-1').on('click', function(ev) {
      $("#video-1").toggle();
      $("#animation1").toggle();
      $("#video-1")[0].src += "&autoplay=1";
       ev.preventDefault();
       });
  $('#play-2').on('click', function(ev) {
      $("#video-2").toggle();
      $("#animation2").toggle();
      $("#video-2")[0].src += "&autoplay=1";
        ev.preventDefault();
       });

  $('#play-6').on('click', function(ev) {
      $("#video-6").toggle();
      $("#animation6").toggle();
      $("#video-5")[0].src += "&autoplay=1";
       ev.preventDefault();
      });

  // $(".right").on("click", function(){
  //   $("#img1-2").toggle();
  // });


// $(".right").on("click",function(){
//   var currentImg = $(".active");
//   var nextImg = currentImg.next();
//
//   if(nextImg.length){
//     currentImg.removeClass(".active").css("z-index", -1000);
//     nextImg.addClass(".active").css("z-index", 1000);
//   }
//
// });
});
