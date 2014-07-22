$(document).ready(function () {

//declare global variables
var imgURLs = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
var slideWindow = document.getElementById('slide_window'); 
var slideDisplay = document.getElementById('slide_display');
var index = 0;          //measures index position within slideshow 
var numSlides = Number(prompt("How many slides to display? (1 - 7)"));      //# of images shown at one time in slideshow



//click handlers for buttons
$('.button-right').click(next);
$('.button-left').click(previous);


//generate slideDisplay innerHTML
function generateUI(numImages) {
	if (numImages > imgURLs.length) {
		alert("Error: not enough images available. Please reduce numSlides or add more images");
	}
	//generate HTML and set src via imgURLs
	else {
		for (var i = 0; i < numImages; i++) {
			slideDisplay.innerHTML += "<li><img id='display" + i + "' src=" + imgURLs[i] + "></li>";
		}
	}
}

//next function
function next() {	
	if ((index + numSlides) < imgURLs.length) {
		var last = slideDisplay.lastChild.lastChild; 
		
		for (var i = 0; i < (numSlides - 1); i++) {
			document.getElementById('display' + i).src = document.getElementById('display' + (i + 1)).src;	
		};
		
		last.style.display = 'none';
		last.src = imgURLs[index + numSlides];
		$(last).fadeIn(750);
	
		index++;	
		
	}
	else {
		console.log("End of slideshow");
	}
};

//previous function
function previous() {
	if (index > 0) { 
		var first = document.getElementById('display0');
		for (var i = numSlides - 1; i > 0; i--) {
			document.getElementById('display' + i).src = document.getElementById('display' + (i - 1)).src;	
		};
		
		first.style.display = 'none';
		first.src = imgURLs[index - 1];
		$(first).fadeIn(750);
	
		index--;
	}
	else {
		console.log("Beginning of slideshow");
	}
}

//set size of slideWindow
function setWindowSize() {
	slideWindow.style.height = "220px";
}

//call functions
generateUI(numSlides);
setWindowSize();

});




