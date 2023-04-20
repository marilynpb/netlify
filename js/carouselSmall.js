// Select all the elements with class name "slideSmall"
var slideSmalls = document.querySelectorAll(".slideSmall");

// Set the current index to 0 and show the first slideSmall
var currentIndexSmall = 0;
showSlideSmall(currentIndexSmall);

// This function hides the current slideSmall, updates the index based on the input,
// and shows the new slideSmall
function showSlideSmall(n) {
  slideSmalls[currentIndexSmall].style.display = "none";
  currentIndexSmall = (n + slideSmalls.length) % slideSmalls.length;
  slideSmalls[currentIndexSmall].style.display = "block";
}

// Add an event listener to the "next" button that calls the showSlide function
// with the next index
document.querySelector(".button-next").addEventListener("click", function() {
  showSlideSmall(currentIndexSmall + 1);
});

// Add an event listener to the "prev" button that calls the showSlide function
// with the previous index
document.querySelector(".button-prev").addEventListener("click", function() {
  showSlideSmall(currentIndexSmall - 1);
});
