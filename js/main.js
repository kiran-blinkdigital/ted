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
      document.getElementById("logo-brand").style.width = "71px";
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
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll button active
const mybutton = document.getElementById("myBtn");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

//scroll top
const bottomButton = document.getElementById("myBtn");
bottomButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// scroll to section click on nav item menu
const links = document.querySelectorAll(".nav-link");
const head = document.getElementById("section1");
console.log(head.clientHeight);
links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    console.log(el);
    const e = el.offsetTop - head.offsetHeight;
    console.log(e);

    // el.scrollIntoView({ behavior: "smooth", top: e });
    window.scrollTo({
      behavior: "smooth",
      top: e,
    });
  });
});

//
// Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $("header").outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 250);

// function hasScrolled() {
//   var st = $(this).scrollTop();

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $("header").removeClass("nav-up").addClass("nav-down");
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $("header").removeClass("nav-down").addClass("nav-up");
//     }
//   }

//   lastScrollTop = st;
// }
