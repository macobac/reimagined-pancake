var nameEl = document.getElementById("name");
var emailEl = document.getElementById("email");
var dropEl = document.getElementById("choose");
var inqEl = document.getElementById("inquiry");
var sendBtn = document.getElementById("sendbtn");
var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

sendBtn.addEventListener("click", checkForm);

function checkForm() {
  if (nameEl.value.length === 0) {
    alert("Please fill in your name");
  } else if (emailEl.value.length === 0) {
    alert("Please fill in your email");
  } else if (emailEl.value.match(validEmail) == false) {
    alert("Invalid Email address.\nMake sure:\n1) you included @,\n2) there are no spaces,\n3) you have a correct domain.");
  } else if (dropEl.selectedIndex === 0) {
    alert("Please choose what fits best");
  } else if (inqEl.value.length === 0) {
    alert("Please fill in your inquiry");
  }
  else {
    alert("Email was sent");
  }
}
