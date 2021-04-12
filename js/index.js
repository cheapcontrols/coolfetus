
// NOTE : Drop fetus //
document.getElementById("fall").style.top = "0px";

const fetusImg = ['building','burglerjar','camera','canada','candlestick','castle',
			'chef','coffee','cookie','crutch','deaf','disguise','disgust','dogcatch'];

const selectedImage = fetusImg[Math.floor(Math.random()*14)];
const imageString = "images/index/" + selectedImage + ".gif"

console.log(imageString);

document.querySelector('#falling_fetus').src = imageString;
document.querySelector('#falling_fetus').title = selectedImage;
// NOTE : ajax requests //
var AJAX_QUOTE = new XMLHttpRequest();

AJAX_QUOTE.open('POST', 'php/quotes.php', true);
AJAX_QUOTE.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
AJAX_QUOTE.onreadystatechange = INITIAL_ARTICLE_REQUEST_RESPONSE;
var POST_STRING = 'GET_INITIAL_QUOTES=nothing';
AJAX_QUOTE.send(POST_STRING);


function INITIAL_ARTICLE_REQUEST_RESPONSE() {
	if (AJAX_QUOTE.readyState === 4) {
		if (AJAX_QUOTE.status === 200) {
			QUOTE_LIST = JSON.parse(AJAX_QUOTE.responseText);
			//alert(QUOTE_LIST);
			if (QUOTE_LIST.length == 2) {
				document.getElementById("fun_fetal_fact").innerHTML = QUOTE_LIST[0].quote;
			}
		}
	}
}
