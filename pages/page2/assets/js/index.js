function myLogin(){
    location.replace("../page2/formLogin/index.html")

}   
function Register(){
location.replace("../page2/formSignup/index.html")
}
function ring(){
document.querySelector('.center').style.display = 'none';
}
function fadeOut(){
setInterval(ring,2000);
}
window.onload = fadeOut;