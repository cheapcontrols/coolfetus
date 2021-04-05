var AJAX_IMAGE = new XMLHttpRequest();
AJAX_IMAGE.open('POST', 'php_scripts/image.php', true);
AJAX_IMAGE.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
AJAX_IMAGE.onreadystatechange = GET_ALL_IMAGES_RESPONSE;
var POST_STRING = 'GET_ALL_IMAGES=nothing';
AJAX_IMAGE.send(POST_STRING);

function GET_ALL_IMAGES_RESPONSE() {
  if (AJAX_IMAGE.readyState === 4) {
    if (AJAX_IMAGE.status === 200) {
      $IMAGE_LIST = JSON.parse(AJAX_IMAGE.responseText);
       $($IMAGE_LIST).each(function(){
         $('body').append($('<img/>',{
           src: "images/fetal_images/" + $(this)[0].name,
         }));
      });
      $('body').append($('<p/>', {
        text: 'Hello',
      }));
    }
  }
}
