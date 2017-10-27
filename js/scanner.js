$(function() {

  let is_scaned = false;
  let success = $('audio')[0];

  $('.camera').html5_qrcode(
    function(data){
      if(!is_scaned){
        is_scaned = true
        success.play();
        success.addEventListener('ended', function() {
          window.location = '/location/' + data
        });
      }
    },
    function(error){
      console.log(error);
    },
    function(videoError){
      console.log(videoError);
    }
  );
  $('.camera video, .camera canvas').removeAttr('height width')
})
