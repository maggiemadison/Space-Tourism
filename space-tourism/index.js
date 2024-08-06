const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");


//when click hamburger menu
navToggle.addEventListener("click", () =>  {
//if menu is closed, open it
    const visibility = nav.getAttribute("data-visible");
//if menu is open, close it
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

