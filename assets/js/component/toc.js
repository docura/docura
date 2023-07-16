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

function updateActiveClasses() {
    const headers = document.querySelectorAll('#article h2, #article h3');
    const links = document.querySelectorAll('#TableOfContents a');

    for (let i = 0; i < headers.length; i++) {
        const rect = headers[i].getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            links[i].classList.add('active');
        } else {
            links[i].classList.remove('active');
        }
    }
}
window.addEventListener('load', updateActiveClasses);
window.addEventListener('resize', updateActiveClasses);
window.addEventListener('scroll', updateActiveClasses);
