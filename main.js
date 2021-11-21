//Hamburger menu
var Navigation = document.getElementById("Navigation");

Navigation.style.maxHeight = "0px";

function menutoggle(){
    if(Navigation.style.maxHeight == "0px")
    {
        Navigation.style.maxHeight = "200px";
    }
    else
    {
        Navigation.style.maxHeight = "0px"
    }
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});