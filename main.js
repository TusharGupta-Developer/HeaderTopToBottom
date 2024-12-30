if ('scrollRestoration' in history) { //This code disables the automatic scroll restoration, allowing you to control the scroll position manually.
    history.scrollRestoration = 'manual';
}

// Get references to the necessary elements
const navMenu = document.getElementById("nav--menu");
const navToggle = document.getElementById("nav--toggle");

/* Toggle Menu */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isMenuVisible = navMenu.classList.contains("show-menu");

        if (isMenuVisible) {
            navMenu.classList.remove("show-menu"); // Hide menu
            navToggle.classList.remove("active"); // Reset toggle animation
        } else {
            navMenu.classList.add("show-menu"); // Show menu
            navToggle.classList.add("active"); // Animate toggle to "X"
        }
    });
}


// // We have also an option to use attribute Method like below 
// if(navToggle){
//     navToggle.addEventListener("click", ()=>{
//         const currentClass = navMenu.getAttribute("class")
//         navMenu.setAttribute("class"," show-menu")
//     })
// }



/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.getElementById("nav--menu")
    // When we click on each nav__link, we remove the show-menu class.
    navMenu.classList.remove("show-menu")
}


navLink.forEach(n => n.addEventListener("click", linkAction))
// Purpose: Adds an event listener to each element in the navLink NodeList.



/*=============== Self:ADD BLUR HEADER ===============*/
document.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > 50) { // Checks if the vertical scroll position (window.scrollY) is greater than 50 pixels.

        header.classList.add("blur__header")
    }
    else {
        header.classList.remove("blur__header")
    }
})

document.getElementById('nav--toggle').addEventListener('click', function () {
    this.classList.toggle('active');
});
