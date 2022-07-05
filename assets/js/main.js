let dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach(el => {
    el.addEventListener('click', function () {
        el.querySelector('.dropdown-menu').classList.toggle('show');
    })
});