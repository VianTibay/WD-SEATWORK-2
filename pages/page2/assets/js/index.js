function myFuction(){
    location.replace("login.html")

}   
function sheshFuction(){
location.replace("signn-up.html")
}
function ring(){
document.querySelector('.center').style.display = 'none';
}
function fadeOut(){
setInterval(ring,2000);
}
window.onload = fadeOut;