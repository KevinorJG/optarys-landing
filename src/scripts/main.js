import "../styles/global.css";
import "aos/dist/aos.css";
import AOS from "aos";

const navbar = document.getElementById("navbar-container");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("shadow-md", window.scrollY > 10);
  });
}

AOS.init();
