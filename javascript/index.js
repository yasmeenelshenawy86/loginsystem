var emailLogin = document.getElementById('email');
var passLogin = document.getElementById("password");
var loginBtn = document.getElementById('loginBtn');
var loginAlert = document.getElementById("loginAlert");
var emptyIn = document.getElementById("emptyIn");
var checkBox = document.getElementById("check");
var checkLogin;
var newArr=[]

newArr = JSON.parse(localStorage.getItem("accounts"));

///*************  function Validation Of Email Login ************///
var setData;
function LoginValid() {
  if (localStorage.getItem("newArr") === null) {
    loginAlert.classList.remove("d-none");
  }
    for (i = 0; i < newArr.length; i++) {
      checkLogin = newArr[i];
      if (
        emailLogin.value === checkLogin.email &&
        passLogin.value === checkLogin.password
      ) {
        setData = `${checkLogin.firstName} ${checkLogin.lastName}`;
        localStorage.setItem("user", JSON.stringify(setData));
        window.location = "./home.html";
        loginAlert.classList.add("d-none");
      } else if (emailLogin.value.length == 0 && passLogin.value.length == 0) {
        emptyIn.classList.remove("d-none");
        loginAlert.classList.add("d-none");
      } else if (emailLogin.value !== checkLogin.email) {
        if (passLogin.value.length == 0) {
          emptyIn.classList.remove("d-none");
        } else {
          loginAlert.classList.remove("d-none");
          emptyIn.classList.add("d-none");
        }
        // emptyIn.classList.add("d-none");
      }
    }
}

///*************  function Check Password************///
function showPass() {
  if (checkBox.checked) {
    passLogin.setAttribute('type', 'text');
  } else {
    passLogin.setAttribute("type", "password");
  }
}

///************** Event On Login Button **********************/
loginBtn.addEventListener('click', function () {
  LoginValid();
})

///************** Event On check Box **********************/
checkBox.addEventListener('click', function () {
  showPass(); 
})

////////////********* INNER FORMS**************///////////

var signUpPage = document.getElementById("signUpPage");
signUpPage.addEventListener("click", function () {
  window.location = "./signup.html";
});
var forgetPass = document.getElementById("forget-pass");
forgetPass.addEventListener("click", function () {
  window.location = "./forgetpass.html";
});
