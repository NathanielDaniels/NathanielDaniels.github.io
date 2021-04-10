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

function smileyFace () {
  let face = $('.smiley-face span')[0]
  let head = $('.smiley-face')[0]
  // let isDead = true;
  let canBlink = true

  document.onmousemove = trackMouse
  // window.onresize = squish;

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
    // if (!isDead) {
    //   return;
    // }

    //? mouse coordinates
    let mX = event.clientX
    let mY = event.clientY

    // console.log(mX, mY);

    //? viewport dimentions
    let vpH = window.innerHeight + 250
    let vpW = window.innerWidth

    //? head boundingbox
    let headBox = head.getBoundingClientRect()

    // console.log(headBox);

    //? face boundingbox
    let faceBox = face.getBoundingClientRect()

    // console.log(faceBox);

    //? the magic
    let calcX = (headBox.width - faceBox.width + 600) * (mX / vpW)

    let calcY = (headBox.height - faceBox.height) * (mY / vpH)

    // console.log(calcX, calcY);

    // //? add bounding restrictions to face
    // calcX = clamp(calcX, 60, 150);
    // calcY = clamp(calcY, 60, 130);
    calcX = clamp(calcX, 80, 150)
    calcY = clamp(calcY, 40, 160)

    face.setAttribute('style', `top: ${calcY}px; left: ${calcX}px;`)
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
  const touchSquint = () => {
    const smileyFace = document.querySelector(".smiley-face")
    const spokenWord = document.querySelector("span.speech-bubble > h2")
    // let face = $('.smiley-face span')[0]
    smileyFace.addEventListener('mouseover' , ()=> {
      face.classList.add('blink')
      spokenWord.innerText = "Watch Out!"
    })
    smileyFace.addEventListener('mouseleave' , ()=> {
      face.classList.remove('blink')
    })
  }
  touchSquint()
}
smileyFace()

//! Speech Bubble Animation! (smileyface)
speechBubble = () => {
  const welcomeWords = ["Welcome in!", "Thanks for stopping by!", "Stay as long as you like!"]
   const speechBubble = document.querySelector(".speech-bubble")
   const spokenWord = document.querySelector(".speech-bubble > h2")
   const smileyFace = document.querySelector('.smiley-face')
   let counter = 0;
   smileyFace.addEventListener('mouseover' , ()=> {
      counter++
      if (counter >= welcomeWords.length) {
        counter = 0
      }
      //? Random
    //  let randomQuote = Math.floor(Math.random() * welcomeWords.length)
    //  spokenWord.innerText = welcomeWords[randomQuote];
      //? In Sequence
      let quote = welcomeWords[counter];
      spokenWord.innerText = quote;
      speechBubble.style.opacity = "1";
   })
   smileyFace.addEventListener('mouseleave' , () => {
     speechBubble.style.opacity = "0"
   })
}
speechBubble()

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

function hamburgerAnimation () {
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
}
hamburgerAnimation()

//! Greeting-Loop Animation (JQuery)================================

function greetingLoop () {
  const text = [
    'web designer',
    // "freelancer",
    // "problem solver",
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
}
greetingLoop()


//! Skills Hover Color Change (About)
function skillsHover () {
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
}
skillsHover()

//! Tilt Animation (projects section)
//!=================================
function removeTilt() {
  console.log("Inner Width", window.innerWidth)
  if (window.innerWidth < 800) {

    const cards = document.querySelectorAll('.cardImg')

    cards.forEach(card =>  {
      console.log(card)

      VanillaTilt.init(card)
      card.vanillaTilt.destroy();
      // card.vanillaTilt.getValues();
    });

  }
}
removeTilt()

//! Contact Section - Floating Box Animation (Completely Random) ====
const floatingBoxSize = () => {
  const boxes = document.querySelectorAll('.floating-boxes li')
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.left = Math.floor(Math.random() * 100) + '%'
    let boxWidth = (boxes[i].style.width =
      Math.floor(Math.random() * (150 - 25) + 25) + 'px')

      // console.log(boxes[i].style.width)
    boxes[i].style.height = boxWidth
    boxes[i].style.animationDelay =
      Math.floor(Math.random() * (1 - 10) + 1) + 's'
    boxes[i].style.animationDuration =
      Math.floor(Math.random() * (30 - 10) + 10) + 's'

    if (i % 2) {
      if (boxes[i].style.width >= 80) {
        boxes[i].style.backgroundColor = "hsla(252, 59%, 29%, 0.37)"
      }
    } else {
      // boxes[i].style.backgroundColor = "hsla(57, 100%, 50%, 0.37)"
      boxes[i].style.backgroundColor = "hsla(252, 59%, 29%, 0.57)"
    }
  }
}
floatingBoxSize()

//! Contact form Label Animation (to legend) =================

function vanillaAnimateLabel() {
  const input = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');

  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('focus', function() {
      this.closest('.field-wrapper').classList.add('focused')
    });

    input[i].addEventListener('blur', function() {
      if (input[i].value === '') {
        this.closest('.field-wrapper').classList.remove('focused')
      }
    });

    textArea.addEventListener('focus', function() {
    this.closest('.field-wrapper').classList.add('focused')
    });
    textArea.addEventListener('blur', function() {
      if (input[i].value === '') {
        this.closest('.field-wrapper').classList.remove('focused')
      }
    });
  };

  // textArea.addEventListener('focus', function() {
  //   this.closest('.field-wrapper').classList.add('focused')
  // });
  // textArea.addEventListener('blur', function() {
  //   if (input[i].value === '') {
  //     this.closest('.field-wrapper').classList.remove('focused')
  //   }
  // });
}
vanillaAnimateLabel()




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
function submitForm () {
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
       console.log('SUCCESS!', response.status, response.text);
      //  const inputReset = document.querySelectorAll('.cf-form .fieldWrapper label')
      // inputReset.forEach(item => item.value = "")
    }, function(error) {
       console.error('FAILED...', JSON.stringify(error));
    });

    //===============================================

    let ourFormData = new FormData(e.target)
    let userName = ourFormData.get('from_name')

    let updatedHTMLContent = `
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
  `

  form.innerHTML = updatedHTMLContent

  })
}

submitForm()


//! Contact Form Click (Legend) Not Complete ======================

// const form = document.querySelectorAll(".cf-form input");
// console.log(form);

// form.forEach((i) => {
//   i.addEventListener("click", () => {
//     const legend = `<legend>${i.placeholder}</legend>`;
//     // console.log(i.);
//   });
// });

