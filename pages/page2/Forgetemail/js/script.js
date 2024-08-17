function showSpinner(){
    location.replace("./Forgetpass/index.html")
  }
function validateEmail() {
    const userEmail = document.querySelector("#UserEmail").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  
    if (userEmail === "") {
      alert("Please input your email!");
    } else if (!emailPattern.test(userEmail)) {
      alert("Please enter a valid email address!");
    } else {

      location.replace("./Forgetpass/index.html");
    }
  }
  

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); 

      validateEmail(); 
    }
  });
  
  
  function showSpinner(){
    validateEmail();
  }
  
  