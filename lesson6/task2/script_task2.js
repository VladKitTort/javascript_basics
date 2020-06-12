"use strict"

let images = document.querySelectorAll('.carousel img');
let current = 0;

function carousel() {
	for (let i=0; i< images.length; i++) {
		images[i].classList.add('opacity0');
	}
	images[current].classList.remove('opacity0');
}

// document.querySelector('.carousel').onclick = carousel;
document.querySelector('.carousel-left').onclick = function(){
	current = (current - 1 + images.length) % images.length;
	carousel();
}
document.querySelector('.carousel-right').onclick = function(){
	current = (current + 1) % images.length;
	carousel();
};