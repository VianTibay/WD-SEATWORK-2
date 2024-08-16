var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 4000);
    const showPassword = document.querySelector("#show-password");
        const  passwordField = document.querySelector("#password");

        showPassword.addEventListener("click", function(){
            this.classList.toggle("fa-eye-slash");
            const type = passwordField.getAttribute("type")
            === "password" ? "text" : "password";
            passwordField.setAttribute("type", type);
        })
        function mySheshfuction() {
         
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
        
            if (email && password) {
                alert("Welcome Back User!");
              
            }else if (!password)
            {
alert("Ops! please insert your password!");
            } 
            else {
                alert("Oops! Please insert your email and password.");
            }
        }
       
        
     
        
function ring(){
    document.querySelector('.center').style.display = 'none';
  }
  function fadeOut(){
    setInterval(ring,2000);
  }
  window.onload = fadeOut;