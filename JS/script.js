const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const slidesMax = slides.length - 1;

let currentSlide = 0;
let currentSlideId = document.getElementById("dot-" + currentSlide);

function setDirection(direction) {
	// If left go backward else go foward
	direction === "left" ? currentSlide-- : currentSlide++;
	// Make a loop around 0 and slidesMax
	if (currentSlide < 0) {
		currentSlide = slidesMax;
	} else if (currentSlide > slidesMax) {
		currentSlide = 0;
	}
	displaySlide();
}

function setValue(number) {
	// Set currentSlide to dot position
	currentSlide = number;
	displaySlide();
}

function displaySlide() {
	// Set current image and tagLine
	document.getElementById("slider-img").src =
		"./assets/images/slideshow/" + slides[currentSlide]["image"];
	document.getElementById("slider-tagline").innerHTML =
		slides[currentSlide]["tagLine"];

	// Remove old selected dot
	currentSlideId.classList.remove("dot_selected");
	// Set a new selected dot
	currentSlideId = document.getElementById("dot-" + currentSlide);
	currentSlideId.classList.add("dot_selected");
}