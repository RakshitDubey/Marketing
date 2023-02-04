
// toggle navbar 
const navilst=document.getElementById('navilist');
const toggle=document.getElementById('toggle');

toggle.addEventListener('click',()=>{
  navilst.classList.toggle('active');
})


// scroll Effect 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("color")
  } if(window.pageYOffset<=sticky){
    navbar.classList.remove("color");
  }
}