// Smiley Face Animation ======================
let face = $('.header--logo span')[0]
let head = $('.header--logo')[0]
let isDead = true
let canBlink = true

document.onmousemove = trackMouse
// window.onresize = squish

// Blink every 5.5 seconds
setInterval(function () {
  if (!canBlink) {
    return
  }

  face.classList.add('blink')

  setTimeout(function () {
    face.classList.remove('blink')
  }, 200)
}, 5500)

function trackMouse (event) {
  if (!isDead) {
    return
  }

  // mouse coordinates
  let mX = event.clientX
  let mY = event.clientY

  // viewport dimentions
  let vpH = window.innerHeight
  let vpW = window.innerWidth

  // head boundingbox
  let headBox = head.getBoundingClientRect()

  // face boundingbox
  let faceBox = face.getBoundingClientRect()

  // the magic
  let calcX = (headBox.width - faceBox.width + 1000) * (mX / vpW)
  let calcY = (headBox.height - faceBox.height) * (mY / vpH)

  // add bounding restrictions to face
  calcX = clamp(calcX, 60, 150)
  calcY = clamp(calcY, 60, 130)

  face.setAttribute('style', 'top: ' + calcY + 'px; left: ' + calcX + 'px;')
}

function clamp (num, min, max) {
  return num <= min ? min : num >= max ? max : num
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

function noSpeechBox () {
  document.querySelector('.speechBubble').style.display = 'none'
}

console.log(noSpeechBox())

// function hideSpeechBox () {
//   setTimeout('noSpeechBox()', 5000)
// }

// Hamburger Menu Animation! ======================
$menu = $('.burger-elements')

$menu.click(function () {
  $('#sidebar-menu').toggleClass('active')
  $(this).toggleClass('close')

  // Trying to get the menu to close when clicking a link or anywhere else
  // Not Working
  $('.sidebar-menu--links').on('click', function () {
    $(this).removeClass('close')
  })
})

// Navbar Scroll Animation ===============================
// Hide Header on on scroll down
// var didScroll
// var lastScrollTop = 0
// var delta = 5
// var navbarHeight = $('header').outerHeight()

// $(window).scroll(function (event) {
//   didScroll = true
// })

// setInterval(function () {
//   if (didScroll) {
//     hasScrolled()
//     didScroll = false
//   }
// }, 100)

// function hasScrolled () {
//   var st = $(this).scrollTop()

//   // Make sure they scroll more than delta
//   if (Math.abs(lastScrollTop - st) <= delta) return

//   // If they scrolled down and are past the navbar, add class .nav-up.
//   // This is necessary so you never see what is "behind" the navbar.
//   if (st > lastScrollTop && st > navbarHeight) {
//     // Scroll Down
//     $('header')
//       .removeClass('nav-down')
//       .addClass('nav-up')
//   } else {
//     // Scroll Up
//     if (st + $(window).height() < $(document).height()) {
//       $('header')
//         .removeClass('nav-up')
//         .addClass('nav-down')
//     }
//   }

//   lastScrollTop = st
// }

// Greeting-Loop Animation ================================
var text = ['Web Designer', 'Web Enthusiast', 'Front-End Developer']
var counter = 0
var elem = $('#greeting')
setInterval(change, 3000)
function change () {
  elem.fadeOut(function () {
    elem.html(text[counter])
    counter++
    if (counter >= text.length) {
      counter = 0
    }
    elem.fadeIn()
  })
}

// Show-More (about) ====================================

// $('.show-more a').on('click', function () {
//   var $this = $(this)
//   var $content = $this.parent().prev('.past')
//   var linkText = $this.text().toUpperCase()

//   if (linkText === 'SHOW MORE') {
//     linkText = 'Show less'
//     $content.switchClass('hideContent', 'showContent', 400)
//   } else {
//     linkText = 'Show more'
//     $content.switchClass('showContent', 'hideContent', 400)
//   }

//   $this.text(linkText)
// })

// PORTFOLIO CLICK FUNCTION =====================
$(function () {
  $('.box').click(function () {
    $(this)
      .toggleClass('rotate')
      .siblings('.rotate')
      .removeClass('rotate')
  })
})
