const nav = $("#nav");
const hamburger = $("#hamburger");
const hamburgerImg = $("#hamburger-icon");
const mobileMenu = $("#mobile-menu");

let open = false;

hamburger.on("click", () => {
	mobileMenu.toggleClass("max-h-60");
	
	open = !open;
	const imgSrc = open ? "img/close.png" : "img/cheese-burger.png";
	hamburgerImg.attr("src", imgSrc);
});