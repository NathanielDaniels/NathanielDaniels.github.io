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
    let calcX = (headBox.width - faceBox.width + 1000) * (mX / vpW)

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
}
smileyFace()

//! Speech Bubble Animation! (smileyface)

// function speechBubble() {
//   setInterval(function () {
//     document.querySelector(".speech-bubble").style.display = "none";
//   }, 2500);
//   //? Remove speech bubble under 1200px screen width (mobile/tablet)
//   if (window.innerWidth < 1200) {
//     document.querySelector(".speech-bubble").style.display = "none";
//   }
// }
// speechBubble();

//! Hamburger Nav Menu Animation! (JQuery) ======================
//? Change this back to vanilla JS (hamburgerAnimation2).

function hamburgerAnimation2 () {
  const menu = document.querySelector('.mobile-burger-menu__elements')

  menu.addEventListener('click', () => {
    const navMenu = document.querySelector('#mobile-nav-menu')
    navMenu.classList.toggle('active')
  })
}
// hamburgerAnimation2();

function hamburgerAnimation () {
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

//! Sidebar location change (screen size) ====

// function sidebarPositionChange() {
//   const sidebar = document.querySelector(".sidebar");
//   // console.log(sidebar);

//   $(window).resize(() => {
//     if (window.innerWidth === 1600) {
//       sidebar.style.right = "8em";
//     } else if (window.innerWidth > 1601) {
//       // sidebar.style.position = "absolute";
//       sidebar.style.margin = "0 auto";

//       // sidebar.style.bottom = "1rem";
//       // sidebar.style.bottom = "1rem";
//       // sidebar.style.right = "20em";
//     } else {
//       sidebar.style.position = "fixed";
//       sidebar.style.right = "0.8rem";
//       // sidebar.style.bottom = "1rem";
//     }
//     // console.log(window.innerWidth);
//   });
// }
// sidebarPositionChange();

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

//! Tilt Animation (projects)
//!=================================
//? If Tilt still works becasue of html attributes, might not need this
// function tiltAnimation() {
//   VanillaTilt.init(document.querySelectorAll(".cardImg"), {
//     max: 95,
//     speed: 400,
//     perspective: 500,
//     glare: true,
//     "max-glare": 1,
//   });
// }
// tiltAnimation();
// function destroyTilt() {
//   let destroyBox = document.querySelectorAll(".cardImg");
//   if (window.innerWidth < 800) {
//     // vanillaTilt.destroy(document.querySelectorAll(".cardImg"));
//     VanillaTilt.init(destroyBox);
//   }
// }
// destroyTilt();

//! PORTFOLIO CLICK FUNCTION (JQuery)=====================
//?flipping cards
// $(function () {
//   $(".card").click(function () {
//     $(this)
//       .toggleClass("is-flipped")
//       .siblings(".is-flipped")
//       .removeClass("is-flipped");
//   });
// });

//! Contact Section - Floating Box Animation (Completely Random) ====
const floatingBoxSize = () => {
  const boxes = document.querySelectorAll('.floating-boxes li')
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.left = Math.floor(Math.random() * 100) + '%'
    let boxWidth = (boxes[i].style.width =
      Math.floor(Math.random() * (150 - 25) + 25) + 'px')

    boxes[i].style.height = boxWidth
    boxes[i].style.animationDelay =
      Math.floor(Math.random() * (1 - 10) + 1) + 's'
    boxes[i].style.animationDuration =
      Math.floor(Math.random() * (30 - 10) + 10) + 's'
  }
}
floatingBoxSize()

//! Contact form Label Animation (to legend) =================

function animateLabel () {
  $('input').on('focus', function () {
    $(this)
      .closest('.field-wrapper')
      .addClass('focused')
  })
  $('input').on('blur', function () {
    if ($(this).val() === '') {
      $(this)
        .closest('.field-wrapper')
        .removeClass('focused')
    }
  })

  $('textarea').on('focus', function () {
    $(this)
      .closest('.field-wrapper')
      .addClass('focused')
  })
  $('textarea').on('blur', function () {
    if ($(this).val() === '') {
      $(this)
        .closest('.field-wrapper')
        .removeClass('focused')
    }
  })
}
animateLabel()

//! Contact form Submit  =================

function submitForm () {
  const form = document.querySelector('.cf-form')

  form.addEventListener('submit', e => {
    e.preventDefault()

    let ourFormData = new FormData(e.target)
    let userName = ourFormData.get('name')
    //! Might not need these below
    // let userEmail = ourFormData.get("email");
    // let userSubject = ourFormData.get("subject");
    // let userMessage = ourFormData.get("message");

    let updatedHTMLContent = `
    <div class="form-update-container" data-tilt >
      <div class="form-update-info" >
        <h2>Thanks, ${userName}.</h2>
        <p>Form Test: Successful. <br/>Unfortunately, nothing has been sent at this time.</p>
        <p>You can contact me on <a
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            href="https://www.linkedin.com/in/nathaniel-daniels-500740139/"
             style="color:#fff; cursor: pointer; margin-top:2em"><i class="fab fa-linkedin"></i></a></p>
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

//=====================================================================================================\
//! LEARNING ASYNC/AWAIT
// async function getPhotos() {
//   let grabPhoto = await fetch("https://picsum.photos/id/237/200/300");
//   let request = await grabPhoto.json();
//   console.log(request);
// }

// getPhotos();

//==========================================================

// async function grabUsers() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   const findUsers = await fetch(url);
//   const response = await findUsers.json();
//   firstUser(response);
// }

// async function firstUser(user) {
//   const userName = await user[0].name;
//   console.log(userName);
//   // document.body.innerHTML = `<div class="userName">${userName}</div>`;
// }
// grabUsers();

// document.body.innerHTML = grabUsers();

//================================================================

// async function getBrew() {
//   const request = await fetch("https://api.openbrewerydb.org/breweries");
//   const breweryList = await request.json();
//   return breweryList;
// }

// function brewDiv(brews) {
//   return `
//     <div class="breweryNames">${brews.name}</div>
//   `;
// }

// getBrew().then((brew) => {
//   return (document.body.innerHTML = `
//     ${brew.map((eachBrew) => brewDiv(eachBrew)).join("")}
//   `);
// });

//================================================================

/*
    Create a User Profile using data from
        https://jsonplaceholder.typicode.com/users/3

    The User Profile must be a Flexbox container with 4 components
        1. Profile Header
            - With the User's name and username
        2. Company
            - Displaying information about their company
        3. Contact Details
            - Contains Email/Phone/Website
        4. User Address
*/

// async function getData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
//   const user = await response.json();
//   console.log(user);
//   return user;
// }

// function userDiv(user) {
//   return `
//         <div class="container">
//             <div class="header">
//                 <h1>${user.name} a.k.a ${user.username} </h1>
//                 <div class="companyInfo">Company: ${user.company["name"]} | ${user.company["catchPhrase"]}</div>
//                 <div class="contactInfo">Email: ${user.email} | Phone: ${user.phone} | Website: ${user.website}</div>
//                  <div class="userAddress">Address: ${user.address["street"]}, ${user.address["suite"]}, ${user.address["city"]}</div>
//             </div>
//         </div>
//     `;
// }

// getData().then((user) => {
//   return (document.body.innerHTML = `${userDiv(user)}`);
// });

//================================================================

/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

// async function getCategories() {
//   let response = await fetch(
//     "https://jservice.io/api/categories?count=4&offset=30"
//   );
//   let data = await response.json();
//   return data;
// }

// function getCategoryHtml(category) {
//   return `
//         <div class="my-category-title">${category.title}</div>
//         <div class="my-category-clue">$100</div>
//         <div class="my-category-clue">$200</div>
//         <div class="my-category-clue">$300</div>
//         <div class="my-category-clue">$400</div>
//     `;
// }

// getCategories().then((categories) => {
//   console.log(categories);
//   document.body.innerHTML = `<div class="board">
//         ${categories.map(getCategoryHtml).join("")}
//     </div>`;
// });

//================================================================

// async function findShow() {
//   const request = await fetch(
//     `https://api.tvmaze.com/singlesearch/shows?q=happy`
//   );
//   const data = await request.json();
//   return data;
// }

// findShow().then((shows) => console.log(shows));

//=====================================
/*
    Bonus Challenge

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries

    Create a my-api component
        display the name and category of the API,
        the description, and also display the type
        of Auth (if any) and whether or not the API
        supports HTTPS

    Finally, display all of the APIs
*/
//==========================================
// const getAPI = fetch("https://api.publicapis.org/entries");

// getAPI
//   .then((response) => response.json())
//   .then((data) => console.table(data.entries.slice(0, 10)));

//========================================

// async function getAPIs() {
//   const request = await fetch("https://api.publicapis.org/entries");
//   const data = await request.json();
//   // data.entries.map((api) => console.log(api));
//   // console.table(data.entries[0].API);
//   return data;
// }

// getAPIs().then((data) => console.table(data.entries[0].Link));

// function getAPIhtml(myAPI) {
//   return `<div class="my-api">
//         <div class="my-api-name">
//             <a href="${myAPI.Link}" target="_blank">${myAPI.API} (${
//     myAPI.Category
//   })</a>
//         </div>
//         <div class="my-api-description">${myAPI.Description}</div>
//         <div class="my-api-auth">Auth: ${myAPI.Auth ? myAPI.Auth : "None"}</div>
//         <div class="my-api-https">HTTPS? ${myAPI.HTTPS}</div>
//     </div>`;
// }

// function displayAPIs(myAPIs) {
//   let sampleAPI = myAPIs.entries[0];
//   // document.body.innerHTML = getAPIhtml(sampleAPI);
// }

// getAPIs()
//   .then(displayAPIs)
//   .catch((e) => console.log(`Error: ${e}`));

// console.log(Array.from([1, 2, 3], (x) => x + x));

//============================
//? Learning Classes, Constructors, Static ...

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static createTodays() {
//     // remember, this = Article
//     return new this("Today's digest", new Date());
//   }
// }

// let article = Article.createTodays();

// console.log(article.title, article.date); // Today's digest

//============================================
//! Reverse a String
// reverse('Instagram')

//? Easy Way
// function reverse(name) {
//   return name.split("").reverse().join("");
// }
// console.log(reverse("Instagram"));

// function reverse(name) {
//   let reverse = "";
//   for (let char of name) {
//     console.log(char);
//     reverse = char + reverse;
//   }
//   return reverse[name.length - 1];
// }

// console.log(reverse("Popeyes"));

//============================================
//! Fetch Test

//? Display instructions + recipe Image for selected recipe

//! Un-comment once live 
// let question = prompt("Name a Food Item")

async function food(item) {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`);
  const data = await request.json()
  return data
}

//! Replale "Soup" with question once live
food("soup")
  .then(item => {
    let meals = [];
    let title = [];

    for ( let recipeItems of item.meals) {
      // console.log(recipeItems)
      meals.push({title: `${recipeItems.strMeal}`, instructions: `${recipeItems.strInstructions}`})
      title.push(`<h1>${recipeItems.strMeal}</h1>`)

      //! Print list of Meals
      document.body.innerHTML = `<section class="meals">${title.join(' ')}</section>`
    }

    console.log(meals[1].title)

    function updateRecipe() {
      meals.forEach((el, index, arr) => {
        
        console.log(arr)
        // console.log(index)
        // console.log(arr[index].title)
        // console.log(arr[index].instructions)

         document.body.innerHTML = `
          <section style="display: flex; flex-direction: column; justify-content: space-between;width: 50%; margin: 2em auto;">
            <div style="color: #fff;"><h1>${meals[1].title}</h1></div>
            <div class="instructions" >
              <p style="color: #fff; padding: 1em 0">${meals[1].instructions}</p>
            </div>

            <button style="cursor: pointer; padding: 5px 10px; background: transparent; border: 2px solid #fff; color: #fff; text-transform: uppercase" onClick="window.location.reload();">new search</button>

          </section>
        `
      }) 
    }


    const h1 = document.querySelectorAll('h1')
    for (let each of h1) {
      each.style.padding = "5px"
      each.style.cursor = "pointer"

      each.addEventListener("click", updateRecipe)
    }

     //* Styling Even/Odd boxes
    const evenSection = document.querySelectorAll('.meals > h1:nth-of-type(even)')
    const oddSection = document.querySelectorAll('.meals > h1:nth-of-type(odd)')
    for (let item of evenSection) {
      item.style.backgroundColor = "grey"
      item.style.color = "black"
    }
    for (let item of oddSection) {
      item.style.color = "#fff"
    }

    const main = document.querySelector('.meals')
    main.style.border = "2px solid black"
  })
  .catch(err => console.error(err))