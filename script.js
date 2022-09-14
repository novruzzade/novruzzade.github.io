let preloader = document.getElementById("preloader")
window.onload = function() {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    preloader.style.display = "none";
};

function background() {
    document.querySelector(".text-box").style = "opacity: 1";
    document.querySelector(".btn-box").style = "opacity: 1";
    document.querySelector(".overlay").style = "background-color: rgb(0 0 0 / 42%)";
}

