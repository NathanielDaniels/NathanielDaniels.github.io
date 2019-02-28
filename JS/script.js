mainTitle = document.getElementById('switch-title')

mainTitle.addEventListener('click', function () {
  mainTitle.innerHTML = 'Welcome!'
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
// $(document).ready(function () {
//   $('.bounce').effect('bounce', { times: 3 }, 600)
// }, 1000)

var docLink = $('#bounce')

setInterval(function () {
  docLink.effect('bounce', { times: 1 }, 1000)
})

// setInterval(function () {
//   $('.bounce').effect('bounce', { times: 3 }, 600)
// }, 1000)
