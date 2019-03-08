// mainTitle = document.getElementById('switch-title')

// mainTitle.addEventListener('click', function () {
//   mainTitle.innerHTML = 'Welcome!'
// })

// Hamburger Menu Animation ===============================
$menu = $('.burger-elements')

$menu.click(function () {
  $(this).toggleClass('close')
})

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

//  ====================================
// $('.box').magnificPopup({
//   delegate: 'a',
//   type: 'image',
//   gallery: {
//     enabled: true
//   }
// })

//  ====================================
// var box = $('.box')

// box.click(function () {
//   $(this).toggleClass('rotate')

// console.log(rotateBox())
// })

// PORTFOLIO CLICK FUNCTION =====================
$(function () {
  $('.box').click(function () {
    // $(this).toggleClass('rotate')
    $(this)
      .toggleClass('rotate')
      .siblings('.rotate')
      .removeClass('rotate')

    // $(this).
  })
})

// ONLY WORKS ONE CLICK ===================
// $('.box').one('click', function () {
//   $(this).toggleClass('rotate')
// })
