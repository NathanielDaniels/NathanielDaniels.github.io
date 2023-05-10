//* Contact form Submit  =================
//? EmailJS
const submitForm = (() => {
  const form = document.querySelector(".cf-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    //? remove social icons (aside)
    const icon = document.querySelectorAll(
      ".contact-social .sidebar__social-media li"
    );
    icon.forEach((item) => (item.style.display = "none"));

    const serviceID = "Portfolio";
    const templateID = "template_jut7dvf";

    let ourFormData = new FormData(e.target);
    let userName = ourFormData.get("from_name");

    const updatedContent = function () {
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
    };

    emailjs
      .sendForm(serviceID, templateID, this)
      .then((response) => {
        form.innerHTML = updatedContent();
        if (response.status === "200") {
          console.log("SUCCESS!", response.status, response.text);
          // form.innerHTML = updatedContent()
        }
        //  const inputReset = document.querySelectorAll('.cf-form .fieldWrapper label')
        // inputReset.forEach(item => item.value = "")
      })
      .catch(function (error) {
        return new Error("FAILED...", JSON.stringify(error));
      });

    //===============================================

    // let ourFormData = new FormData(e.target)
    // let userName = ourFormData.get('from_name')

    // const updatedContent = () => {
    //   return `
    //     <div class="form-update-container" data-tilt >
    //   <div class="form-update-info" >
    //     <h2>Thanks, ${userName}.</h2>
    //     <p>Your message has been delivered successfully!</p>
    //     <p>Follow me on:</p>
    //     <div class="icons">
    //       <li>
    //         <a
    //           target="_blank"
    //           title="Twitter"
    //           rel="noreferrer"
    //           href="https://twitter.com/NathanDDaniels"
    //           ><i class="fab fa-twitter-square"></i
    //         ></a>
    //       </li>
    //       <li>
    //         <a
    //           target="_blank"
    //           title="linkedIn"
    //           rel="noreferrer"
    //           href="https://www.linkedin.com/in/nathaniel-daniels-500740139/"
    //           ><i class="fab fa-linkedin"></i
    //         ></a>
    //       </li>
    //       <li>
    //         <a
    //           target="_blank"
    //           title="GitHub"
    //           rel="noreferrer"
    //           href="https://github.com/NathanielDaniels"
    //           ><i class="fab fa-github-square"></i
    //         ></a>
    //       </li>
    //     </div>
    //   </div>
    // </div>
    //   `;
    // }

    // form.innerHTML = updatedContent()
  });
})();
