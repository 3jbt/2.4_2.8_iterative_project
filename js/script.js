// Get the button:
let mybutton = document.getElementById("myBtn");
let menu = document.getElementById("Menu"); 

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	mybutton.style.opacity = "100";
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function menutoggle() {
  var x = document.getElementById("menu");
  var obscure = document.getElementById("obscure");
  var html = document.getElementById
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
	  if (x.style.display === "none") {
		x.style.display = "grid";
		x.style.position = "fixed";
		x.style.top = "0";
		obscure.style.display = "fixed";
	  } else {
		x.style.display = "none";
	  }
  }
	else {
	x.style.position = "static";
	  x.style.display = "none";
	}
}