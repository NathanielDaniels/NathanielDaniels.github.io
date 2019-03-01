mainTitle = document.getElementById('switch-title')

mainTitle.addEventListener('click', function () {
  mainTitle.innerHTML = 'Welcome!'
})

// Hamburger Menu====================================

var $hamburger = $('.hamburger')
$hamburger.on('click', function (e) {
  $hamburger.toggleClass('is-active')
  // Do something else, like open/close menu
})

// Greeting-Loop =======================================
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
