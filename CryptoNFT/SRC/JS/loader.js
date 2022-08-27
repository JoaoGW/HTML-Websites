//This script represents a very basic pre-loader for the page

var loader = document.getElementById("preloader");
document.body.style.overflow = "unset";

window.addEventListener("load", function(){
    loader.style.display = "none"
})