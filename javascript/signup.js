
var firstNameInput = document.getElementById('firstName');
var lastNameInput = document.getElementById('lastName');
var passwordInput = document.getElementById('pass');
var rePasswordInput = document.getElementById('rePass');
var emailInput = document.getElementById('email');
var signUpBtn = document.getElementById('signUp');
var alertMassage = document.getElementById("alertMassage");
var matchPass = document.getElementById("matchPass");
var reqFields = document.getElementById("reqFields");
var alertSuc = document.getElementById("alert-suc");
var emailAlert = document.getElementById("emailAlert");
var spanAction = document.querySelectorAll(".form-field span:last-child");
var clrSpanAction = 0;

var accountList = [];
if (localStorage.getItem("accounts") !== null) {
  accountList = JSON.parse(localStorage.getItem("accounts"));
}

///********** Function Check Exist Email**********//////
function existEmail() {
  for (var i = 0; i < accountList.length; i++) {
    if (emailInput.value === accountList[i].email) {
      return true;
    }
  }
}
///********** Function Add Accounts**********//////
function addAccount() {
if (
    fNameValid() &&
    lNameValid() &&
    passwordValid() &&
    rePasswordValid() &&
    emailValid()
  ) {
    if (existEmail()) {
      emailAlert.classList.remove("d-none");
      alertSuc.classList.add("d-none");
    } else {
      var account = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        password: passwordInput.value,
        rePassword: rePasswordInput.value,
        email: emailInput.value,
      };
      accountList.push(account);
      localStorage.setItem("accounts", JSON.stringify(accountList));
      matchPass.classList.add("d-none");
      alertSuc.classList.remove("d-none");
      for (var i = 0; i < spanAction.length; i++) {
        clrSpanAction = spanAction[i];
        clrSpanAction.classList.add("d-none");
        reqFields.classList.add("d-none");
      }
      clear();
    }
  }else {
    for (var i = 0; i < spanAction.length; i++) {
      clrSpanAction = spanAction[i];
      clrSpanAction.classList.remove("d-none");
      reqFields.classList.remove("d-none");
      alertSuc.classList.add("d-none");
    }
  }
}
///********** Function Clear Form**********//////
function clear(){
  firstNameInput.value = "";
  lastNameInput.value = "";
  passwordInput.value = "";
  rePasswordInput.value = "";
  emailInput.value = "";
}
///*************  function Validation Of First Name ************///
function fNameValid(){
  var fNameRegex = /^[A-Za-z][a-zA-Z0-9_]{2,10}$/;
  var checkFName = firstNameInput.value;
  if (fNameRegex.test(checkFName)) {
    firstNameInput.classList.add('is-valid');
    firstNameInput.classList.remove("is-invalid");
    return true;
  } else {
    firstNameInput.classList.remove('is-valid');
    firstNameInput.classList.add('is-invalid');
    return false;
  }
}
///*************  function Validation Of Last Name ************///
function lNameValid(){
  var lNameRegex = /^[A-Za-z][a-zA-Z0-9_]{2,10}$/;
  var checkLName = lastNameInput.value;
  if (lNameRegex.test(checkLName)) {
    lastNameInput.classList.add('is-valid');
    lastNameInput.classList.remove("is-invalid");
    return true;
  } else {
    lastNameInput.classList.remove('is-valid');
    lastNameInput.classList.add('is-invalid');
    return false;
  }
}
///*************  function Validation Of Password************///
function passwordValid(){
  var passwordRegex =
    /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,32}$/;
  var checkPassword = passwordInput.value;
  if (passwordRegex.test(checkPassword)) {
    passwordInput.classList.add("is-valid");
    passwordInput.classList.remove("is-invalid");
    alertMassage.classList.add('d-none');
    return true;
  } else {
    passwordInput.classList.remove("is-valid");
    passwordInput.classList.add("is-invalid");
    alertMassage.classList.remove("d-none");
    return false;
  }
}
///*************  function Validation Of Re Password************///
function rePasswordValid(){
  if (passwordInput.value === rePasswordInput.value) {
    rePasswordInput.classList.add("is-valid");
    rePasswordInput.classList.remove("is-invalid");
    matchPass.classList.remove("d-none");
    return true;
  } else {
    rePasswordInput.classList.remove("is-valid");
    rePasswordInput.classList.add("is-invalid");
    matchPass.classList.add("d-none");
    return false;
  }
}
///*************  function Validation Of Email************///
function emailValid(){
  var emailRegex =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    emailAlert.classList.add("d-none");
    return true;
  }else {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    return false
  }
}
///*************  function Validation Of All Fields************///
// function fieldsValid() {
//   if (
//     fNameValid() &&
//     lNameValid() &&
//     passwordValid() &&
//     rePasswordValid() &&
//     emailValid()
//   ) {
//     for (var i = 0; i < spanAction.length; i++) {
//       clrSpanAction = spanAction[i];
//       clrSpanAction.classList.add("d-none");
//       reqFields.classList.add("d-none");
//     }
//     return true
//   } else {
//       // reqFields.classList.add("d-none");
//       for (var i = 0; i < spanAction.length; i++) {
//         clrSpanAction = spanAction[i];
//         clrSpanAction.classList.remove("d-none");
//         reqFields.classList.remove("d-none");
//       }
//     }
//     // clrSpanAction.classList.add("d-none");
  
// }
///************** Event On First Name Input **********************/
firstNameInput.addEventListener('input', function () {
  fNameValid();
});
///************** Event On Last Name Input **********************/
lastNameInput.addEventListener('input', function () {
  lNameValid();
});
///************** Event On Password Input **********************/
passwordInput.addEventListener("input", function () {
  passwordValid();
});
///************** Event On Re Password Input **********************/
rePasswordInput.addEventListener("input", function () {
  rePasswordValid();
});
///************** Event On Email Input **********************/
emailInput.addEventListener("input", function () {
  emailValid();
});
///************** Event Sign UP Button **********************/
signUpBtn.addEventListener("click", function () {
  addAccount();

});
///************* Convert To Sign In Page *****************/
var signInPage = document.getElementById("signInPage");
signInPage.addEventListener("click", function () {
  window.location = "./index.html";
});
