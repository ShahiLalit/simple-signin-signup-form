const signinBtn = document.querySelector(".signin-btn");
const signupBtn = document.querySelector(".signup-btn");
const formContainer = document.querySelector(".form-container");

signinBtn.addEventListener("click", function () {
  formContainer.style.marginLeft = "0";
  signinBtn.style.backgroundPosition = "left";
  signupBtn.style.backgroundPosition = "left";
});

signupBtn.addEventListener("click", function () {
  formContainer.style.marginLeft = "-100%";
  signupBtn.style.backgroundPosition = "right";
  signinBtn.style.backgroundPosition = "right";
});
