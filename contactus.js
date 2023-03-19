const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const dropEl = document.getElementById("choose");
const inqEl = document.getElementById("inquiry");
const sendBtn = document.getElementById("sendbtn");
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const inputsArr = [nameEl, emailEl, dropEl, inqEl]

sendBtn.addEventListener("click", checkForm);

function checkForm() {
  if (nameEl.value.length === 0) {
    alert("Please fill in your name");
  } else if (emailEl.value.length === 0) {
    alert("Please fill in your email");
  } else if (!(emailEl.value.match(validEmail))) {
    alert("Invalid Email address");
  } else if (dropEl.selectedIndex === 0) {
    alert("Please choose an option");
  } else if (inqEl.value.length === 0) {
    alert("Please fill in your inquiry");
  }
  else {
    alert("Inquiry is sent");
    inputsArr.forEach(input => {
      input.value = '';
    });
    return true;
  }
}
