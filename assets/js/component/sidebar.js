const fromDesktop = window.matchMedia('(min-width: 1280px)');
const sidebarSticky = document.querySelector("#sidebar .sticky")
if (fromDesktop && sidebarSticky) {
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            sidebarSticky.style.top = "20px";
            sidebarSticky.style.bottom = "65px";
        } else {
            sidebarSticky.style.top = null;
            sidebarSticky.style.bottom = null;
        }
    });
}