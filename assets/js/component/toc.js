const fromLargeTablet = window.matchMedia('(min-width: 1024px)');
const tocSticky = document.querySelector("#toc .sticky")
if (fromLargeTablet && tocSticky) {
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            tocSticky.style.top = "20px";
        } else {
            tocSticky.style.top = null;
        }
    });
}