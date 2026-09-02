// Get the following back to top button & the hamburger menu icon:
let mybutton = document.getElementById("following_button");
let toggle = document.getElementById("toggle");

// Check whether the viewing device is in portrait or landscape:
if(window.innerHeight > window.innerWidth){
    var portraitness = 1;
	console.log("Portrait");
} else {
	var portraitness = 0;
	console.log("Landscape");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (portraitness == 0) {
		// User is on landscape & scrolls 400px: show button & hamburger menu
		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
			mybutton.style.opacity = "100";
			toggle.style.display = "block";
		} else {
		// Landscape & not scrolled 400px: hide button & hamburger menu
			mybutton.style.opacity = "0";
			toggle.style.display = "none";
		}
	} else {
		mybutton.style.opacity = "100";
		toggle.style.display = "block";		
	}
	
	if (portraitness == 1) {
		if (document.body.scrollTop > 30|| document.documentElement.scrollTop > 30) {
		// User is in portrait mode & scrolls 30 px: show the back to top button & hamburger menu
			mybutton.style.opacity = "100";
			toggle.style.display = "block";
		} else {
		// User is in portrait mode and has not scrolled 30px: hide button & hamburger menu
			mybutton.style.opacity = "0";
			toggle.style.display = "none";
		}
	}
}

// Return the user to the top of the page, scrolling smooothly.
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// Code for toggling the dropdown menu.
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
			if (menu.style.top != "80px") {
				console.log("open menu");
				menu.style.top = "80px";
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