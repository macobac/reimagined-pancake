
const emailEl = document.getElementById("email");
const inqEl = document.getElementById("inquiry");
const sendBtn = document.getElementById("admsend");
const inputsArr = [emailEl, inqEl]
const validEmail =
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
