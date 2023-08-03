let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let subButton = document.getElementById("subButton");
let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("singupBtn");
let required = document.getElementById('required');

let userData = JSON.parse(localStorage.getItem("user")) ?? [];

signupBtn.addEventListener("click", function () {
  let regexName = /^[A-z0-9]{4,20}$/;
  let regexEmail = /^[A-z0-9]{5,30}@gmail\.com$/;
  let regexPassword = /^[A-z0-9]{8,20}$/;

  if (
    regexName.test(userName.value) &&
    regexEmail.test(userEmail.value) &&
    regexPassword.test(userPassword.value)
  ) {
    Storage();
    userName.value ='';
    userEmail.value = '';
    userPassword.value = '';
    required.classList.add('d-none');
  } else {
    required.classList.remove('d-none');
  }
});

function Storage() {

  let user = {
    user: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };

  userData.push(user);

  localStorage.setItem("user", JSON.stringify(userData));
}
