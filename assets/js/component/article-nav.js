const btnArticleNavMenu = document.querySelector("#article-nav-menu-btn")
btnArticleNavMenu.addEventListener('click', function () {
    document.body.classList.add('offcanvas-sidebar-on')
});

const btnArticleNavToc = document.querySelector("#article-nav-toc-btn")
btnArticleNavToc.addEventListener('click', function () {
    document.body.classList.add('offcanvas-toc-on')
});

const btnCloseArticleNavMenu = document.querySelector("#sidebar .btn-close")
btnCloseArticleNavMenu.addEventListener('click', function () {
    document.body.classList.remove('offcanvas-sidebar-on')
});

const btnCloseArticleNavToc = document.querySelector("#toc .btn-close")
btnCloseArticleNavToc.addEventListener('click', function () {
    document.body.classList.remove('offcanvas-toc-on')
});