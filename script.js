const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

navLink.forEach((item) => {
     item.addEventListener("click", function(){
       hamburger.classList.remove("active");
       navMenu.classList.remove("active");
     })
});