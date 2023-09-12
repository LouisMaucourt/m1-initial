const section = document.getElementById('interaction');
const circle = document.querySelector('.section-whitetoblack_circle');

function handleScroll() {
  const scrollPosition = window.scrollY;
  const sectionTop = section.offsetTop - window.innerHeight * 0.4;
  const sectionBottom = sectionTop + section.offsetHeight;

  if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
    const progress = (scrollPosition - sectionTop) / (sectionBottom - sectionTop);
    const newSize = 150 + 3500 * progress; 
    circle.style.width = newSize + 'px';
    circle.style.height = newSize + 'px';
  }
}
window.addEventListener('scroll', handleScroll);


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { 
            navbar.style.backgroundColor = "rgba(0, 0, 0, 1)"; 
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; 
        }
    });
});

