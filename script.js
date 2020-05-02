const navOpenBtn = document.querySelector(".header__nav-trigger");

const navList = document.querySelector(".header__nav-list");

const navCloseBtn = document.querySelector(".header__back-btn");

const navLinks = document.querySelectorAll(".header__nav-link");

const openNav = () => {
  navList.classList.add("is-active");
};

const closeNav = () => {
  navList.classList.remove("is-active");
};

navOpenBtn.addEventListener("click", openNav);

navCloseBtn.addEventListener("click", closeNav);

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      if (navList.classList.contains("is-active")) closeNav();
      return;
    } else {
      if (navList.classList.contains("is-active")) closeNav();
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });
});
