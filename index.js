const form = document.getElementById("email-form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkEmail();
});

const checkEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Please provide an email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please provide a valid email");
  } else {
    setErrorFor(email, "");
    showSuccess(email, "");
  }
};

const setErrorFor = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  formField.classList.add("css-fontawesome");
  const small = document.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.remove("css-fontawesome");
  formField.classList.add("success");
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};
