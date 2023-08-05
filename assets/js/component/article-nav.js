const btnArticleNavMenu = document.querySelector("#article-nav-menu-btn")
if (btnArticleNavMenu) {
    btnArticleNavMenu.addEventListener('click', function () {
        document.body.classList.remove('offcanvas-toc-on');
        document.body.classList.add('offcanvas-sidebar-on')
    });
}

const btnArticleNavToc = document.querySelector("#article-nav-toc-btn")
if (btnArticleNavToc) {
    btnArticleNavToc.addEventListener('click', function () {
        document.body.classList.remove('offcanvas-sidebar-on');
        document.body.classList.add('offcanvas-toc-on')
    });
}

const btnCloseArticleNavMenu = document.querySelector("#sidebar .btn-close")
if (btnCloseArticleNavMenu) {
    btnCloseArticleNavMenu.addEventListener('click', function () {
        document.body.classList.remove('offcanvas-sidebar-on')
    });
}

const btnCloseArticleNavToc = document.querySelector("#toc .btn-close")
if (btnCloseArticleNavToc) {
    btnCloseArticleNavToc.addEventListener('click', function () {
        document.body.classList.remove('offcanvas-toc-on')
    });

    const tocLinks = document.querySelectorAll("#toc ul a");
    tocLinks.forEach(link => {
        link.addEventListener('click', function () {
            document.body.classList.remove('offcanvas-toc-on')
        });
    });
}