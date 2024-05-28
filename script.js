const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
$(function() {
  // Owl Carousel
  var owl = $("#owl2");
  owl.owlCarousel({
    pagination : false,
    items: 2,
    margin: 10,
    loop: true,
    nav: true
  });
});
