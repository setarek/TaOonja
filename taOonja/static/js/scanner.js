$(function() {

  var is_scaned = false;

  console.log('now')
  var success = $('audio')[0];

  $('.camera').html5_qrcode(
    function(data){
      console.log('success', data);
      if(!is_scaned){
        success.play();
        is_scaned = true;
        window.location = "map.html"; // this is temp as shit
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
