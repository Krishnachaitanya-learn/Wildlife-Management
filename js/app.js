const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle view
    nav.classList.toggle("nav-active");

    //Animation of links
    navLinks.forEach((link, index) => {
      const num = index / 7 + 0.5;
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navLinkFade 0.5s ease forwards" + " " + num + "s";
      }
    });

    //Burger Animate
    burger.classList.toggle("cross-mark");
  });
};

navSlide();
