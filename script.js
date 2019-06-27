var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random")

function updateBackground() {
	body.style.background = "linear-gradient(to right, " +
		color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background;
}

color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
button.addEventListener("click", function() {
	var letters = '0123456789ABCDEF';
	var col1 = '#';
	var col2 = '#';

	for (var i = 0; i < 6; i++) {
		col1 += letters[Math.floor(Math.random() * 16)];
	}

	for (var i = 0; i < 6; i++) {
		col2 += letters[Math.floor(Math.random() * 16)];
	}

	color1.value = col1;
	color2.value = col2;

	updateBackground();
})

updateBackground();