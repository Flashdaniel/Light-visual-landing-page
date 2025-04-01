function isValidEmail() {
  const email = document.querySelector(".email");
  const error = document.querySelector(".validity");
  const form = document.querySelector("form");

  email.addEventListener("input", () => {
    if (email.validity.valid) {
      error.textContent = "";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  const showError = () => {
    if (email.validity.valueMissing) {
      error.textContent = "Please, your email address is required.";
    }

    if (email.validity.typeMismatch) {
      error.textContent = "Entered value needs to be an email address.";
    }
  };
}

export default isValidEmail;
