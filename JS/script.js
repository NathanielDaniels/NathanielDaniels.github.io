//! skills icon hover  ======================

const skillsUl = document.querySelectorAll(".skills-list > li");
const skillsLi = document.querySelectorAll(".skills-list > li > i");

for (let index = 0; index < skillsUl.length; index++) {
  skillsUl[index].addEventListener("mouseenter", () => {
    if (index % 2 === 0) {
      skillsLi[index].style.color = "hsl(60, 100%, 44%)";
    }
  });
  skillsUl[index].addEventListener("mouseleave", () => {
    if (index % 2 === 0) {
      skillsLi[index].style.color = "black";
    }
  });
}

//! Title SVG Animation ======================
$(function () {
  $("#name-svg").load("/titleName-anim/name-svg.html");
});

//! Smiley Face Animation ======================
let face = $(".smiley-face span")[0];
let head = $(".smiley-face")[0];
// let isDead = true;
let canBlink = true;

document.onmousemove = trackMouse;
// window.onresize = squish;

//? Blink every 5.5 seconds
setInterval(function () {
  if (!canBlink) {
    return;
  }

  face.classList.add("blink");

  setTimeout(function () {
    face.classList.remove("blink");
  }, 200);
}, 5500);

function trackMouse(event) {
  // if (!isDead) {
  //   return;
  // }

  //? mouse coordinates
  let mX = event.clientX;
  let mY = event.clientY;

  // console.log(mX, mY);

  //? viewport dimentions
  let vpH = window.innerHeight + 250;
  let vpW = window.innerWidth;

  //? head boundingbox
  let headBox = head.getBoundingClientRect();

  // console.log(headBox);

  //? face boundingbox
  let faceBox = face.getBoundingClientRect();

  // console.log(faceBox);

  //? the magic
  let calcX = (headBox.width - faceBox.width + 1000) * (mX / vpW);

  let calcY = (headBox.height - faceBox.height) * (mY / vpH);

  // console.log(calcX, calcY);

  // //? add bounding restrictions to face
  // calcX = clamp(calcX, 60, 150);
  // calcY = clamp(calcY, 60, 130);
  calcX = clamp(calcX, 80, 150);
  calcY = clamp(calcY, 40, 160);

  face.setAttribute("style", `top: ${calcY}px; left: ${calcX}px;`);
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

// add squish effect when viewport minimizes
// function squish () {
//   // head boundingbox
//   let headBox = head.getBoundingClientRect()

//   let wP = 1 - headBox.width / 300
//   let hP = 1 - headBox.height / 300

//   let squishP = Math.max(wP, hP) * 2

//   canBlink = !(squishP > 1.2)
//   isDead = !(squishP > 1.3)

//   head.setAttribute('style', 'background: rgba(169,3,41,' + squishP + ');')

//   face.style.opacity = 1.6 - squishP
// }

//! Speech Bubble Animation! (smileyface)======================

setInterval(function () {
  document.querySelector(".speech-bubble").style.display = "none";
}, 2500);

//! Hamburger Menu Animation! JQuery ======================
$menu = $(".burger-elements");

$menu.click(function () {
  $("#sidebar-menu").toggleClass("active");
  $(this).toggleClass("close");
});

//! Close SideBar Menu on Click of any Link! JQuery ============
$("#sidebar-menu ul li a").click(function () {
  $("#sidebar-menu").removeClass("active");
  $menu.removeClass("close");
});

//! Greeting-Loop Animation (JQuery)================================
const text = [
  "Web Designer",
  "Freelancer",
  "Web Enthusiast",
  "Front-End Developer",
];
let counter = 0;
const elem = $("#greeting");
setTimeout(() => {
  setInterval(change, 3000);
}, 3000);
function change() {
  elem.fadeOut(function () {
    elem.text(text[counter]);
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
    elem.fadeIn();
  });
}

//! Navbar Scroll Animation (JQuery)===============================
// Hide Header on on scroll down
// let didScroll;
// let lastScrollTop = 0;
// let delta = 5;
// let navbarHeight = $("header").outerHeight();

// $(window).scroll(function (event) {
//   didScroll = true;
// });

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled();
//     didScroll = false;
//   }
// }, 100);

// function hasScrolled() {
//   let st = $(this).scrollTop();

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $("header").removeClass("nav-down").addClass("nav-up");
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $("header").removeClass("nav-up").addClass("nav-down");
//     }
//   }

//   lastScrollTop = st;
// }

//! PORTFOLIO CLICK FUNCTION (JQuery)=====================
$(function () {
  $(".card").click(function () {
    $(this)
      .toggleClass("is-flipped")
      .siblings(".is-flipped")
      .removeClass("is-flipped");
  });
});

//==================================================
// Projects

//=====================================================
// let header = document.getElementById("header__nav-links");

// let a = header.getElementsByTagName("a");

// for (let i = 0; i < a.length; i++) {
//q   a[i];
//   console.log(i);
// }

// console.log(a);

// a.style.color = "red";
