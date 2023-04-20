// Select all the elements with class name "slide"
var slides = document.querySelectorAll(".slide");

// Set the current index to 0 and show the first slide
var currentIndex = 0;
showSlide(currentIndex);

// This function hides the current slide, updates the index based on the input,
// and shows the new slide
function showSlide(n) {
  slides[currentIndex].style.display = "none";
  currentIndex = (n + slides.length) % slides.length;
  slides[currentIndex].style.display = "block";
}

// Add an event listener to the "next" button that calls the showSlide function
// with the next index
document.querySelector("#btn-next").addEventListener("click", function() {
  console.log('clickNExt')
  showSlide(currentIndex + 1);
});

// Add an event listener to the "prev" button that calls the showSlide function
// with the previous index
document.querySelector("#btn-prev").addEventListener("click", function() {
  console.log('clickPrev')
  showSlide(currentIndex - 1);
});
