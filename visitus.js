
var emailEl = document.getElementById("email");
var inqEl = document.getElementById("inquiry");
var sendBtn = document.getElementById("admsend");
var inputsArr = [emailEl, inqEl]
var validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

sendBtn.addEventListener("click", checkForm);

function checkForm() {
  if (emailEl.value.length === 0) {
    alert("Please fill in your email");
  } else if (!emailEl.value.match(validEmail)) {
    alert("Invalid Email address");
  } else if (inqEl.value.length === 0) {
    alert("Please fill in your inquiry");
  } else {
    alert("Inquiry is sent");
    inputsArr.forEach(input => {
        input.value = '';
      });
    return true;
  }
}
