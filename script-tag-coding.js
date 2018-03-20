$(document).ready(function(){
  // $('body').css('display', 'none');
  // $('body').fadeIn(1000);
$("#chinese").hide();
$("#video-1").hide();
$("#video-2").hide();
$("#video-3").hide();
$("#video-4").hide();
$("#video-5").hide();
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
  $('#play-4').on('click', function(ev) {
      $("#video-4").toggle();
      $("#animation4").toggle();
      $("#video-4")[0].src += "&autoplay=1";
       ev.preventDefault();
       });
  $('#play-5').on('click', function(ev) {
      $("#video-5").toggle();
      $("#animation5").toggle();
      $("#video-5")[0].src += "&autoplay=1";
       ev.preventDefault();
      });

});
