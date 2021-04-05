


//<!-- Google Analytics -->
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-39236557-3', 'auto');
		ga('send', 'pageview');
//<!-- End Google Analytics -->

// NOTE : Header Social Media
let socialMedia = "";
//socialMedia += "<a href='https://www.facebook.com/The-Weekly-Stupid-381670372234061/' target='blank'></a>";
//socialMedia += "<a href='http://www.twitter.com/theweeklystupid' target='blank'></a>";
//socialMedia += "<a href='http://www.instagram.com/frigusfeti' target='blank'></a>";
socialMedia += "<a href='https://www.youtube.com/channel/UCGZAlSMcvzseHoy8UG4FEUw?view_as=subscriber' target='blank'></a>";
//socialMedia += "<a href='https://shop.spreadshirt.com/the-weekly-stupid' target='blank'></a>";



document.getElementById("social").innerHTML = socialMedia;



// NOTE : load nav area
const current_location = ((document.location.href.split("/").pop()).split(".",1));
const body_id = document.getElementsByTagName("body")[0].id;
let nav_menu = "<ul>";
nav_menu += "<li><a href='index.html'";
nav_menu += body_id == "index"?" id='index_nav_sel'":" id='index_nav'";
nav_menu += "></a></li>";
nav_menu += "<li><a href='playhouse.html'";
nav_menu += body_id == "playhouse"?" id='play_nav_sel'":" id='play_nav'";
nav_menu += "></a></li>";
nav_menu += "<li><a href='circus.html'";
nav_menu += body_id == "circus"?" id='circus_nav_sel'":" id='circus_nav'";
nav_menu += "></a></li>";
nav_menu += "<li><a href='about.html'";
nav_menu += body_id == "about"?" id='about_nav_sel'":" id='about_nav'";
nav_menu += "></a></li>";
nav_menu += "<li><a href='contact.html'";
nav_menu += body_id == "contact"?" id='contact_nav_sel'":" id='contact_nav'";
nav_menu += "></a></li>";
nav_menu += "</ul>";

document.getElementById("main_nav").innerHTML = nav_menu;


// NOTE : Footer
//document.getElementById("copyright").innerHTML = "&copy;2018 - " + new Date().getFullYear() + " www.theweeklystupid.com all rights reserved";
