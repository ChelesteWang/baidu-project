import hideElement from './js/utils.js'
let menu = document.getElementById('menu');
function start() {
    let welcome = document.getElementById("welcome");
    welcome.style.display = "none";
    menu.style.display = "none"
}
let welcome = document.getElementById("welcome");
welcome.addEventListener("click", start())

let info = document.getElementById("info")
info.addEventListener("click", hideElement(this))