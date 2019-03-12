// mainTitle = document.getElementById('switch-title')

// mainTitle.addEventListener('click', function () {
//   mainTitle.innerHTML = 'Welcome!'
// })

// Hamburger Menu Animation ===============================
$menu = $('.burger-elements')

$menu.click(function () {
  $('#sidebar-menu').toggleClass('active')
  $(this).toggleClass('close')
})

// Navbar Scroll Animation ===============================
// Hide Header on on scroll down
var didScroll
var lastScrollTop = 0
var delta = 5
var navbarHeight = $('header').outerHeight()

$(window).scroll(function (event) {
  didScroll = true
})

setInterval(function () {
  if (didScroll) {
    hasScrolled()
    didScroll = false
  }
}, 100)

function hasScrolled () {
  var st = $(this).scrollTop()

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $('header')
      .removeClass('nav-down')
      .addClass('nav-up')
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $('header')
        .removeClass('nav-up')
        .addClass('nav-down')
    }
  }

  lastScrollTop = st
}

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

// Bounce Animation ====================================
var docLink = $('#bounce')

setInterval(function () {
  docLink.effect('bounce', { times: 1 }, 1000)
})

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
    // $(this).toggleClass('rotate')
    $(this)
      .toggleClass('rotate')
      .siblings('.rotate')
      .removeClass('rotate')
  })
})

// ONLY WORKS ONE CLICK ===================
// $('.box').one('click', function () {
//   $(this).toggleClass('rotate')
// })
