// var l = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];
// var x = new AudioContext();
// var a = x.createAnalyser();
// a.fftSize = 32;
// var d = new Uint8Array(16);
// navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
//   x.createMediaStreamSource(s).connect(a);
//   z();
// });

// function z() {
//   setTimeout(z, 40);
//   a.getByteFrequencyData(d);
//   var s = [];
//   d.forEach(v => s.push(l[Math.floor((v / 255) * 8)]));
//   location.hash = document.title = s.join("");
// }

// Title SVG Animation ======================
$(function() {
  $("#name-svg").load("/titleName-anim/name-svg.html");
});

// Smiley Face Animation ======================
let face = $(".smiley-face span")[0];
let head = $(".smiley-face")[0];
let isDead = true;
let canBlink = true;

document.onmousemove = trackMouse;
// window.onresize = squish

// Blink every 5.5 seconds
setInterval(function() {
  if (!canBlink) {
    return;
  }

  face.classList.add("blink");

  setTimeout(function() {
    face.classList.remove("blink");
  }, 200);
}, 5500);

function trackMouse(event) {
  if (!isDead) {
    return;
  }

  // mouse coordinates
  let mX = event.clientX;
  let mY = event.clientY;

  // viewport dimentions
  let vpH = window.innerHeight;
  let vpW = window.innerWidth;

  // head boundingbox
  let headBox = head.getBoundingClientRect();

  // face boundingbox
  let faceBox = face.getBoundingClientRect();

  // the magic
  let calcX = (headBox.width - faceBox.width + 1000) * (mX / vpW);
  let calcY = (headBox.height - faceBox.height) * (mY / vpH);

  // add bounding restrictions to face
  calcX = clamp(calcX, 60, 150);
  calcY = clamp(calcY, 60, 130);

  face.setAttribute("style", "top: " + calcY + "px; left: " + calcX + "px;");
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

// Speech Bubble Animation! (for face_)======================

setInterval(function() {
  document.querySelector(".speechBubble").style.display = "none";
}, 2500);

// Hamburger Menu Animation! ======================
$menu = $(".burger-elements");

$menu.click(function() {
  $("#sidebar-menu").toggleClass("active");
  $(this).toggleClass("close");
});

// Close Menu on Click of Link! ============
$("#sidebar-menu ul li a").click(function() {
  $("#sidebar-menu").removeClass("active");
  $menu.removeClass("close");
});

// Navbar Scroll Animation ===============================
// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("header").outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 100);

function hasScrolled() {
  let st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header")
      .removeClass("nav-down")
      .addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header")
        .removeClass("nav-up")
        .addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

// Greeting-Loop Animation ================================
const text = [
  "Web Designer",
  "Freelancer",
  "Web Enthusiast",
  "Front-End Developer"
];
let counter = 0;
const elem = $("#greeting");
setTimeout(function() {
  setInterval(change, 3000);
}, 3000);
function change() {
  elem.fadeOut(function() {
    elem.text(text[counter]);
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
    elem.fadeIn();
  });
}

// PORTFOLIO CLICK FUNCTION =====================
$(function() {
  $(".card").click(function() {
    $(this)
      .toggleClass("is-flipped")
      .siblings(".is-flipped")
      .removeClass("is-flipped");
  });
});

//=====================================================
let header = document.getElementById("header__nav-links");

let a = header.getElementsByTagName("a");

for (let i = 0; i < a.length; i++) {
  a[i];
  console.log(i);
}

console.log(a);

a.style.color = "red";
