//! Page Scroll Indicator.
function scrollIndicator () {
  window.onscroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    // let scrolled = (winScroll / height) * 100;
    let scrolled =
      window.innerWidth < 1200
        ? (winScroll / height) * 102
        : (winScroll / height) * 100
    document.getElementById('myBar').style.width = scrolled + '%'
  }
}
scrollIndicator()

//! Main Title SVG Animation ======================

$(function () {
  $('#name-svg').load('/titleName-anim/name-svg.html')
})

//! Smiley Face Animation ======================

const smileyFace = (() => {
  let face = $('.smiley-face span')[0]
  let head = $('.smiley-face')[0]
  // let isDead = true;
  let canBlink = true

  document.onmousemove = trackMouse

  //? Blink every 5.5 seconds
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

    //? mouse coordinates
    let mX = event.clientX
    let mY = event.clientY
    //? viewport dimentions
    let vpH = window.innerHeight + 250
    let vpW = window.innerWidth

    //? head boundingbox
    let headBox = head.getBoundingClientRect()

    //? face boundingbox
    let faceBox = face.getBoundingClientRect()

    //? the magic
    let calcX = (headBox.width - faceBox.width + 600) * (mX / vpW)
    let calcY = (headBox.height - faceBox.height) * (mY / vpH)

    // //? add bounding restrictions to face
    calcX = clamp(calcX, 80, 150)
    calcY = clamp(calcY, 40, 160)

    face.setAttribute('style', `top: ${calcY}px; left: ${calcX}px;`)
  }

  function clamp (num, min, max) {
    return num <= min ? min : num >= max ? max : num
  }
  const touchSquint = (() => {
    const smileyFace = document.querySelector(".smiley-face")
    // const spokenWord = document.querySelector("span.speech-bubble > h2")
    // let face = $('.smiley-face span')[0]
    smileyFace.addEventListener('mouseover' , ()=> {
      face.classList.add('blink')
      // speechBubble.style.opacity = "0"
    })
    smileyFace.addEventListener('mouseleave' , ()=> {
      face.classList.remove('blink')
    })
  })()
})()

function throttle(event, delay) {
  let timer = null;
  return function() {
    const context = this;
    console.log('context', context);
    const args = arguments;
    console.log('args', args);
    if (!timer) {
      timer = setTimeout(function() {
        event.apply(context, args);
        timer = null;
      }, delay);
    }
  }
}

//! Speech Bubble Animation! (smileyface)
speechBubble = (() => {
  let currentWord = 'Welcome in!'
  const welcomeWords = ["Welcome in!", "Thanks for stopping by!", "Stay as long as you like!"]
   const speechBubble = document.querySelector(".speech-bubble")
   const spokenWord = document.querySelector(".speech-bubble > h2")
   const smileyFace = document.querySelector('.smiley-face')
   const smileyFaceFace = document.querySelector('.smiley-face__face')
   let counter = 0;
   smileyFace.addEventListener('mouseover' , throttle((event) => {
      event.target === smileyFaceFace ? speechBubble.style.opacity = "0" : speechBubble.style.opacity = "1"
      // console.log(event)
        counter++
        // counter reset
        if (counter >= welcomeWords.length) {
          counter = 0
        }
        currentWord = welcomeWords[counter]
        console.log(currentWord)
        //? Random
       let randomQuote = Math.floor(Math.random() * welcomeWords.length)
       const showCorrectQuote = randomQuote !== currentWord ? randomQuote : randomQuote + 1
       spokenWord.innerText = welcomeWords[showCorrectQuote];
      //  spokenWord.innerText = welcomeWords[randomQuote];
        //? In Sequence
        // if (event.target === smileyFace) {
        // let quote = welcomeWords[counter];
        // spokenWord.innerText = quote;
        // speechBubble.style.opacity = "1";
        // }
}, 600)

  //  (event) => {
  //   event.target === smileyFaceFace ? speechBubble.style.opacity = "0" : speechBubble.style.opacity = "1"
  //   console.log(event)
  //     counter++
  //     if (counter >= welcomeWords.length) {
  //       counter = 0
  //     }
  //     //? Random
  //   //  let randomQuote = Math.floor(Math.random() * welcomeWords.length)
  //   //  spokenWord.innerText = welcomeWords[randomQuote];
  //     //? In Sequence
  //     if (event.target === smileyFace) {
  //     let quote = welcomeWords[counter];
  //     spokenWord.innerText = quote;
  //     speechBubble.style.opacity = "1";
  //     }
  //  }
   )

   smileyFace.addEventListener('mouseleave' , () => {
     speechBubble.style.opacity = "0"
   })

})()

//! Hamburger Nav Menu Animation! (JQuery) ======================
//? Change this back to vanilla JS (hamburgerAnimation2).

// function hamburgerAnimation2 () {
//   const menu = document.querySelector('.mobile-burger-menu__elements')

//   menu.onclick = function() {
//     const navMenu = document.querySelector('#mobile-nav-menu')
//     navMenu.classList.toggle('active')
//   }
// }
// hamburgerAnimation2();

const hamburgerAnimation = (() => {
  // const burgerMenu = document.querySelector('.mobile-burger-menu__elements')

   // burgerMenu.addEventListener('click', function () {
  //   console.log("this",this)
  //   const navMenu = document.querySelector('#mobile-nav-menu')
  //   navMenu.classList.toggle('active')
  //   this.classList.toggle('close')
  // })

  //? JQUERY
  $menu = $('.mobile-burger-menu__elements')
  $menu.click(function () {
    $('#mobile-nav-menu').toggleClass('active')
    $(this).toggleClass('close')
  })

  //! Close btn SideBar Nav Menu (JQuery)
  $('#mobile-nav-menu ul li a').click(function () {
    $('#mobile-nav-menu').removeClass('active')
    $menu.removeClass('close')
  })
})()

//! Greeting-Loop Animation (JQuery)================================

const greetingLoop = (() => {
  const text = [
    'web designer',
    'web enthusiast',
    'web developer'
  ]
  let counter = 0
  const elem = $('#greeting')
  setTimeout(() => {
    setInterval(change, 5000)
  }, 3000)
  function change () {
    elem.fadeOut(function () {
      elem.text(text[counter])
      counter++
      if (counter >= text.length) {
        counter = 0
      }
      elem.fadeIn()
    })
  }
})()


//* Skills Hover Color Change (About)
const skillsHover = (() => {
  const skillsUl = document.querySelectorAll('.skills-list > li')
  const skillsLi = document.querySelectorAll('.skills-list > li > i')

  for (let index = 0; index < skillsUl.length; index++) {
    skillsUl[index].addEventListener('mouseenter', () => {
      if (index % 2 === 0) {
        skillsLi[index].style.color = 'hsl(60, 100%, 44%)'
      }
    })
    skillsUl[index].addEventListener('mouseleave', () => {
      if (index % 2 === 0) {
        skillsLi[index].style.color = '#474747'
      }
    })
  }
})()

//* Tilt Animation (projects section)
const removeTilt = (() => {
  console.log("Inner Width", window.innerWidth)
  if (window.innerWidth < 1200) {

    const cards = document.querySelectorAll('.cardImg')

    cards.forEach(card =>  {
      console.log(card)

      VanillaTilt.init(card)
      card.vanillaTilt.destroy();
      // card.vanillaTilt.getValues();
    });

  }
})()

/* 
/  floatingBoxSize function to randomly set the size, position, 
/  animation delay, animation duration, and 
/  background color for a list of floating boxes.
*/

const floatingBoxSize = (() => {
  const boxes = document.querySelectorAll('.floating-boxes li')
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i]
    box.style.left = Math.floor(Math.random() * 100) + '%'
    box.style.width = Math.floor(Math.random() * (150 - 25) + 25) + 'px'
    box.style.height = box.style.width
    box.style.animationDelay =
      Math.floor(Math.random() * (1 - 10) + 1) + 's'
    box.style.animationDuration =
      Math.floor(Math.random() * (30 - 10) + 10) + 's'
    if (i % 2) {
      box.style.backgroundColor = "hsla(252, 59%, 29%, 0.37)"
    } else {
      box.style.backgroundColor = "hsla(252, 59%, 29%, 0.57)"
    }
  }
})()

//! Contact form Label Animation (to legend) =================

const vanillaAnimateFormLabel = (() => {
  const input = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');

  for (let i = 0; i < input.length; i++) {
    // Add a focus event listener to each input and textarea element.
    input[i].addEventListener('focus', function() {
      // Add the 'focused' class to the closest parent element that has the class 'field-wrapper'.
      this.closest('.field-wrapper').classList.add('focused')
    });

    // Add a blur event listener to each input and textarea element.
    input[i].addEventListener('blur', function() {
      // If the input or textarea element's value is blank, remove the 'focused' class from the closest parent element that has the class 'field-wrapper'.
      if (input[i].value === '') {
        this.closest('.field-wrapper').classList.remove('focused')
      }
    });
  };

  // Add a focus event listener to the textarea element.
  textArea.addEventListener('focus', function() {
    // Add the 'focused' class to the closest parent element that has the class 'field-wrapper'.
    this.closest('.field-wrapper').classList.add('focused')
  });
  // Add a blur event listener to the textarea element.
  textArea.addEventListener('blur', function() {
    // If the textarea element's value is blank, remove the 'focused' class from the closest parent element that has the class 'field-wrapper'.
    if (textArea.value === '') {
      this.closest('.field-wrapper').classList.remove('focused')
    }
  });
})();

//! Removed Jquery after testing =========================================
// function animateLabel () {
//   $('input').on('focus', function () {
//     $(this)
//       .closest('.field-wrapper')
//       .addClass('focused')
//   })
//   $('input').on('blur', function () {
//     if ($(this).val() === '') {
//       $(this)
//         .closest('.field-wrapper')
//         .removeClass('focused')
//     }
//   })

//   $('textarea').on('focus', function () {
//     $(this)
//       .closest('.field-wrapper')
//       .addClass('focused')
//   })
//   $('textarea').on('blur', function () {
//     if ($(this).val() === '') {
//       $(this)
//         .closest('.field-wrapper')
//         .removeClass('focused')
//     }
//   })
// }
// animateLabel()

//! Social icon hover =========================================
//? remove .contact-social to enable all social-icons on website

// function socialHover() {
//   const icon = document.querySelectorAll('.contact-social .sidebar__social-media li');

//   console.log(icon)

//   icon.forEach(icon => icon.addEventListener('mouseover', function() {
//     console.log('icon hovered')
//     const slideOut = document.querySelector('.slideOut-anim');
//     slideOut.style.display = 'flex'
//   }))

// }

// socialHover()

//! Contact form Submit  =================
//? EmailJS
const submitForm = (() => {
  const form = document.querySelector('.cf-form')

  
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    //? remove social icons (aside)
    const icon = document.querySelectorAll('.contact-social .sidebar__social-media li');
    icon.forEach(item => item.style.display = "none");

    const serviceID = 'Portfolio'
    const templateID = 'template_jut7dvf'

    emailjs.sendForm(serviceID, templateID, this)
    .then(function(response) {
      if (response.status === '200') {
        console.log('SUCCESS!', response.status, response.text);
      }
      //  const inputReset = document.querySelectorAll('.cf-form .fieldWrapper label')
      // inputReset.forEach(item => item.value = "")
    }).catch(function(error) {
      console.error('FAILED...', JSON.stringify(error));
    });

    //===============================================

    let ourFormData = new FormData(e.target)
    let userName = ourFormData.get('from_name')

    const updatedContent = () => {
      return `
        <div class="form-update-container" data-tilt >
      <div class="form-update-info" >
        <h2>Thanks, ${userName}.</h2>
        <p>Your message has been delivered successfully!</p>
        <p>Follow me on:</p>
        <div class="icons">
          <li>
            <a
              target="_blank"
              title="Twitter"
              rel="noreferrer"
              href="https://twitter.com/NathanDDaniels"
              ><i class="fab fa-twitter-square"></i
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              title="linkedIn"
              rel="noreferrer"
              href="https://www.linkedin.com/in/nathaniel-daniels-500740139/"
              ><i class="fab fa-linkedin"></i
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              title="GitHub"
              rel="noreferrer"
              href="https://github.com/NathanielDaniels"
              ><i class="fab fa-github-square"></i
            ></a>
          </li>
        </div>
      </div>
    </div>
      `;
    }

  form.innerHTML = updatedContent()
  })
})();
