/*functionality of hamburger menu*/

const btn = document.querySelector(".fa");
const headermenu = document.querySelector(".headermenu");
btn.addEventListener("click", ()=>{
    headermenu.classList.toggle("active");
});