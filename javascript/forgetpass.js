$(document).ready(function () {
  $(".sign-up-form").on("submit", submit);
});


function submit(e) {
  $(".sign-up-container").addClass("submitted");
  e.preventDefault();
}

function home() {
  window.location = './index.html';
}
// var homeBtn = document.getElementById('loginBtn');
// homeBtn.addEventListener('click', function () {
// })
