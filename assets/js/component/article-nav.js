const body = document.body;

const btnArticleNavMenu = document.querySelector("#article-nav-menu-btn")
if (btnArticleNavMenu) {
    btnArticleNavMenu.addEventListener('click', function () {
        body.classList.add('offcanvas-sidebar-on')
    });
}

const btnArticleNavToc = document.querySelector("#article-nav-toc-btn")
if (btnArticleNavToc) {
    btnArticleNavToc.addEventListener('click', function () {
        body.classList.add('offcanvas-toc-on')
    });
}

const btnCloseArticleNavMenu = document.querySelector("#sidebar .btn-close")
if (btnCloseArticleNavMenu) {
    btnCloseArticleNavMenu.addEventListener('click', function () {
        body.classList.remove('offcanvas-sidebar-on')
    });
}

const btnCloseArticleNavToc = document.querySelector("#toc .btn-close")
if (btnCloseArticleNavToc) {
    btnCloseArticleNavToc.addEventListener('click', function () {
        body.classList.remove('offcanvas-toc-on')
    });

    const tocLinks = document.querySelectorAll("#toc ul a");
    tocLinks.forEach(link => {
        link.addEventListener('click', function () {
            body.classList.remove('offcanvas-toc-on')
        });
    });
}

body.addEventListener('click', e => {
    const isBtnArticleNavMenu = e.target.closest('#article-nav-menu-btn');
    const isSidebar = e.target.closest('#sidebar');
    if (!isBtnArticleNavMenu && !isSidebar && body.classList.contains('offcanvas-sidebar-on')) {
        body.classList.remove('offcanvas-sidebar-on');
    }

    const isBtnArticleNavToc = e.target.closest('#article-nav-toc-btn');
    const toc = e.target.closest('#toc');
    if (!isBtnArticleNavToc && !toc && body.classList.contains('offcanvas-toc-on')) {
        body.classList.remove('offcanvas-toc-on');
    }
});