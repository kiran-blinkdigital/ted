const accordionHeaders = document.querySelectorAll(".accordion-item-header");

window.onload = function () {
  document.getElementById("cs").className = "accordion-item-header active";
  const current = document.querySelector(".accordion-item-header.active");
  current.nextElementSibling.style.maxHeight =
    current.nextElementSibling.scrollHeight + "px";
};

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    const currentActive = document.querySelector(
      ".accordion-item-header.active"
    );

    if (currentActive && currentActive !== accordionHeader) {
      currentActive.classList.toggle("active");
      currentActive.nextElementSibling.style.maxHeight = 0;
    }
    accordionHeader.classList.toggle("active");
    const accBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accBody.style.maxHeight = accBody.scrollHeight + "px";
    } else {
      accBody.style.maxHeight = 0;
    }
  });
});

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function () {
//   scrollFunction();
// };
window.addEventListener("scroll", () => {
  if (window.outerWidth < 768) {
    console.log(window.outerWidth);

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("logo-brand").style.width = "51px";
    } else {
      document.getElementById("logo-brand").style.width = "61px";
    }
  } else {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("logo-brand").style.width = "61px";
    } else {
      document.getElementById("logo-brand").style.width = "75px";
    }
  }
});

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("logo-brand").style.width = "51px";
//   } else {
//     document.getElementById("logo-brand").style.width = "61px";
//   }
// }

// hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//
const bottomButton = document.getElementById("smooth-scroll");
bottomButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

console.log();
