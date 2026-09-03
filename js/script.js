// Get the button:
let mybutton = document.getElementById("myBtn");
let toggle = document.getElementById("toggle");

if(window.innerHeight > window.innerWidth){
    var portraitness = 1;
	console.log("Portrait");
} else {
	var portraitness = 0;
	console.log("Landscape");
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (portraitness == 0) {
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
			mybutton.style.opacity = "100";
			toggle.style.display = "block";
		} else {
			mybutton.style.opacity = "0";
			toggle.style.display = "none";
		}
	} else {
		mybutton.style.opacity = "100";
		toggle.style.display = "block";		
	}
	
	if (portraitness == 1) {
		if (document.body.scrollTop > 30|| document.documentElement.scrollTop > 30) {
			mybutton.style.opacity = "100";
			toggle.style.display = "block";
		} else {
			mybutton.style.opacity = "0";
			toggle.style.display = "none";
		}
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function menutoggle() {
	var menu = document.getElementById("menu");
	var bars = document.getElementById("toggle");
	var overlay = document.getElementById("obscure");
	
	if (portraitness == 0) {
		// If in Landscape Mode:
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
			// If scrolled more than 400px
			bars.classList.toggle("open");
			menu.style.position = "fixed";	
			if (menu.style.top != "50px") {
				console.log("open menu");
				menu.style.top = "50px";
				overlay.style.display = "block";
				document.body.style.overflow = "hidden";
			} else {
				console.log("close menu");
				menu.style.top = "-1000px";
				overlay.style.display = "none";
				document.body.style.overflow = "";
			}
		} else {
			// NOT scrolled more than 400px
			alert("You shouldn't be seeing this..");
		}
	} else {
		// If in Portrait Mode:
		bars.classList.toggle("open");
		menu.style.position = "fixed";	
		if (menu.style.top != "0px") {
			console.log("open menu");
			menu.style.top = "0px";
			overlay.style.display = "block";
			document.body.style.overflow = "hidden";
		} else {
			console.log("close menu");
			menu.style.top = "-1000px";
			overlay.style.display = "none";
			document.body.style.overflow = "";
		}
	}
}
