// Get the button:
let mybutton = document.getElementById("myBtn");
let menu = document.getElementById("Menu"); 

let toggle = document.getElementById("toggle");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	mybutton.style.opacity = "100";
	toggle.style.display = "block";
	
  } else {
    mybutton.style.opacity = "0";
	toggle.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function menutoggle() {
  var x = document.getElementById("menu");
  var html = document.getElementById
  var content = document.getElementById("toggle");
  var obscure = document.getElementById("obscure");
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	  content.classList.toggle('open');
	  x.style.position = "fixed";
	  if (x.style.top != "50px") {
		x.style.top = "50px";
		obscure.style.display = "block";
		document.body.style.overflow = "hidden";
	  } else {
		x.style.top = "-1000px";
		
		obscure.style.display = "none";
		document.body.style.overflow = "";
	  }
  }
	else {
	x.style.position = "static";
	x.style.display = "none";
	obscure.style.display = "none";
	}
}