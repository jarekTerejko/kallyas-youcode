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

// adds the "active" class to the link that was clicked
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

// prevent page from reloading after form submit
// no validation made
document.querySelector(".contact__form").addEventListener('submit', e => {
  e.preventDefault()
})

window.addEventListener("scroll", ()=> {
  const navbar = document.querySelector(".header__navbar")

  navbar.classList.toggle('scrolled', window.scrollY > 0)
})