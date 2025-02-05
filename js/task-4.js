const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //   console.log(event.currentTarget.elements.email.value);
  //   console.log(event.currentTarget.elements.password.value);

  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  if (!(email && password)) {
    alert("All form fields must be filled in");
    return;
  }

  const formSubmit = {
    email,
    password,
  };

  console.log(formSubmit);
  event.currentTarget.reset();
}