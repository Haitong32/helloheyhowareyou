$(document).ready(function(){
  // $('body').css('display', 'none');
  // $('body').fadeIn(1000);
$("#chinese").hide();
  $( "#gif2" ).click(function() {
    $(".photofeed").toggle();
    $("#chinese").toggle();
    $(".content").toggle();
  });
  $( "#gif1" ).click(function() {
        $('body').toggleClass('bgimg');
    });

});
