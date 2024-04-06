function hamburgerMenu() {
	var x = document.getElementById("hamburger");
	// create the hamburger menu that show nav when clicked
	x.addEventListener("click", function () {
		document.querySelector(".l-header__nav").classList.toggle("active");
	});
}

hamburgerMenu();
