let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let loginBtn = document.getElementById("loginBtn");
let successAlert = document.getElementById("success");
let dangerAlert = document.getElementById("danger");
let invalid = document.getElementById("invalid");
let data = localStorage.getItem("user") || [];
let parsedData = JSON.parse(data);

loginBtn.addEventListener("click", function () {
  if (userEmail.value == "") {
    dangerAlert.classList.remove("d-none");
    invalid.classList.add("d-none");
    return;
  } else if (userPassword.value == "") {
    dangerAlert.classList.remove("d-none");
    invalid.classList.add("d-none");
    return;
  } else {
    emailValidation();
    passwordValidation();
    checkValidation();
  }
});

userEmail.addEventListener("input", emailValidation);
userPassword.addEventListener("input", passwordValidation);

function emailValidation() {
  if (parsedData.find((e) => e.email === userEmail.value)) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
  } else {
    userEmail.classList.remove("is-valid");
    userEmail.classList.add("is-invalid");
  }
}

function passwordValidation() {
  if (parsedData.find((e) => e.password === userPassword.value)) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
  } else {
    userPassword.classList.remove("is-valid");
    userPassword.classList.add("is-invalid");
  }
}

function checkValidation() {
  if (userEmail.classList.contains("is-valid") && userPassword.classList.contains("is-valid")) {
    successAlert.classList.remove("d-none");
    dangerAlert.classList.add("d-none");
    invalid.classList.add("d-none");
    loginBtn.setAttribute("href", "./page3/index.html");
  } else {
    invalid.classList.remove("d-none");
    dangerAlert.classList.add("d-none");
  }
}
