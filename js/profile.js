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

const edit = () => {
  const outBox = document.querySelector(".edit_box");
  const pwdBox = document.querySelector(".edit_pswrd");
  const phnoBox = document.querySelector(".edit_number");
  const phPensil = document.querySelector("#edit_phno");
  const pwdPensil = document.querySelector("#edit_password");

  phPensil.addEventListener("click", () => {
    if (outBox.style.display === "none") {
      phnoBox.classList.add("unhide");
      outBox.classList.add("unhide");
    } else {
      phnoBox.classList.remove("unhide");
      outBox.classList.remove("unhide");
    }
  });

  pwdBox.addEventListener("click", () => {
    if (outBox.style.display === "none") {
      pwdPensil.classList.add("unhide");
      outBox.classList.add("unhide");
    } else {
      pwdPensil.classList.remove("unhide");
      outBox.classList.remove("unhide");
    }
  });
};

edit();
