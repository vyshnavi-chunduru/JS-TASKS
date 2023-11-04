// Selecting input fields
const nameValue = document.getElementById("name-value");
const userValue = document.getElementById("user-value");
const emailValue = document.getElementById("email-value");
const pwdValue = document.getElementById("pwd-value");
const phoneValue = document.getElementById("phone-value");
const panValue = document.getElementById("pan-value");

const addbtn = document.getElementById("btn");

//Selecting error fields
const nameError = document.getElementById("name-error");
const userError = document.getElementById("user-error");
const emailError = document.getElementById("email-error");
const pwdError = document.getElementById("pwd-error");
const phoneError = document.getElementById("phone-error");
const panError = document.getElementById("pan-error");

//validation function for name field

function validateName() {
  const name = nameValue.value;

  if (name.length == 0) {
    nameError.innerHTML = "FirstName is required";
    addbtn.disabled = true;
    return false;
  }


  if (!name.match(/^[A-Z][a-z]{3,}[\s]{1}[A-Za-z]+$/)) {
    nameError.innerHTML = "Firstname must be and contain 4-15 characters";
    nameError.style.borderColor = "orange";
    addbtn.disabled = true;
    return false;
  }

  nameError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  nameError.style.borderColor = "#ced4da";
  addbtn.disabled = false;
  return true;
}

nameValue.addEventListener("keyup", validateName);
nameValue.addEventListener("blur", validateName);

// function styles(){

// }

//validation function for username field

function validateuser() {
  const username = userValue.value;

  if (username.length == 0) {
    userError.innerHTML = "Username is required";
    addbtn.disabled = true;
    return false;
  }
  if (!username.match(/^[a-zA-Z0-9\.\_\-]{3,}[A-Za-z]+$/)) {
    userError.innerHTML = "Username must be and contain 5-12 characters";
    addbtn.disabled = true;
    return false;
  }

  userError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}

userValue.addEventListener("keyup", validateuser);
userValue.addEventListener("blur", validateuser);

//validation function for email field

function validateEmail() {
  const email = emailValue.value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    addbtn.disabled = true;
    return false;
  }

  if (!email.match(/^[a-zA-Z0-9\.\_\-]+[@][a-z]+[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email must be vaild. e.g: abc@domain.com";
    addbtn.disabled = true;
    return false;
  }

  emailError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}

emailValue.addEventListener("keyup", validateEmail);
emailValue.addEventListener("blur", validateEmail);

//validation function for password field

function validatepwd() {
  const pwd = pwdValue.value;

  if (pwd.length == 0) {
    pwdError.innerHTML = "password is required";
    addbtn.disabled = true;
    return false;
  }

  if (!pwd.match(/^[a-zA-Z0-9\.\_\-]+[\W]+[a-zA-Z0-9]+$/)) {
    pwdError.innerHTML =
      "password must be alphanumiric(@, _ and - are also allowed) and be 8-20 characters";
    addbtn.disabled = true;
    return false;
  }

  pwdError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}

pwdValue.addEventListener("keyup", validatepwd);
pwdValue.addEventListener("blur", validatepwd);

//validation function for mobileNo field

function validatephone() {
  const phone = phoneValue.value;

  if (phone.length == 0) {
    phoneError.innerHTML = "mobile number is required";
    addbtn.disabled = true;
    return false;
  }

  if (!phone.match(/^[8,9][0-9]{9}$/)) {
    phoneError.innerHTML =
      "telephone must be a vaild indian telephone number(10 digits)";
    addbtn.disabled = true;
    return false;
  }

  phoneError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}

phoneValue.addEventListener("keyup", validatephone);
phoneValue.addEventListener("blur", validatephone);

//validation function for pan number field

function validatepan() {
  const pan = panValue.value;

  if (pan.length == 0) {
    panError.innerHTML = "panCard is required";
    addbtn.disabled = true;
    return false;
  }
  if (!pan.match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)) {
    panError.innerHTML = "must be a valid panCard number";
    addbtn.disabled = true;
    return false;
  }

  panError.innerHTML = `<i class = 'fas fa-check-circle icon'></i>`;
  addbtn.disabled = false;
  return true;
}

panValue.addEventListener("keyup", validatepan);
panValue.addEventListener("blur", validatepan);
