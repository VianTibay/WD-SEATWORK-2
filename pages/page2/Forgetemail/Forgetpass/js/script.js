const pwShow = document.querySelector(".show"),
createPw = document.querySelector("#createPw"),
confirmPw = document.querySelector("#confirmPw"),
alertIcon = document.querySelector(".errorIcon"),
alertText = document.querySelector(".text"),
submitBtn = document.querySelector("#button");

// JS code to show/hide password
pwShow.addEventListener("click", () => {
  if ((createPw.type === "password") && (confirmPw.type === "password")) {
    createPw.type = "text";
    confirmPw.type = "text";
    pwShow.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    createPw.type = "password";
    confirmPw.type = "password";
    pwShow.classList.replace("fa-eye", "fa-eye-slash");
  }
});

// JS code to check and confirm input field's password
createPw.addEventListener("input", () => {
  let inputValue = createPw.value.trim(); // Trim removes any leading or trailing spaces

  if (inputValue.length >= 8) {
    confirmPw.removeAttribute("disabled");
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.add("active");
  } else {
    confirmPw.setAttribute("disabled", true);
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.remove("active");
    confirmPw.value = ""; // Clear the confirm password field
    alertText.innerText = "Enter at least 8 Characters";
    alertText.style.color = "#a6a6a6";
    alertIcon.style.display = "none";
  }
});

// JS code to handle form submission
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the form from submitting
  handlePasswordValidation();
});

// JS code to handle Enter key press for submission
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default behavior
    handlePasswordValidation();
  }
});

// Function to handle password validation
function handlePasswordValidation() {
  if (createPw.value === confirmPw.value) {
    alertText.innerText = "Password Matched";
    alertIcon.style.display = "none";
    alertText.style.color = "#4070F4";
  } else {
    alert("The password is invalid");
    alertText.innerText = "Password didn't Match";
    alertText.style.color = "#D93025";
    alertIcon.style.display = "block";
  }
}
