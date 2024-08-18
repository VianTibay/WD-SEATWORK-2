function myLogin(){
    location.replace("../page2/formLogin/index.html")

}   
function myRegister(){
location.replace("./formSignup/index.html")
}
function ring(){
document.querySelector('.center').style.display = 'none';
}
function fadeOut(){
setInterval(ring,2000);
}
window.onload = fadeOut;
