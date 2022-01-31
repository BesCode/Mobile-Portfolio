var menu = document.querySelector(".menu");
var mobileNav = document.querySelector(".mobileNav");
var menuIcon = document.querySelector(".bx");

//event change when we click on the menu

menu.addEventListener("click", toggleMobileNav);
//shows the specific function of the above
function toggleMobileNav(){
    mobileNav.classList.toggle("showMobileNav");

//toggles the menu Icon
console.log(menuIcon);

menuIcon.classList.toggle("bx-x");
}

//event change when we click on the mobile Nav

mobileNav.addEventListener("click", removeMobileNav)

function removeMobileNav(){
    mobileNav.classList.remove("showMobileNav");
}

