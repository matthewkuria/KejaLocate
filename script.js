const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const date = document.querySelector(".date");

date.innerHTML = new Date().getFullYear();

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))