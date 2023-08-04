let dropdowns = document.querySelectorAll('.dropdown')
const openSelector = '.dropdown-menu.show';

dropdowns.forEach(el => {
    el.addEventListener('click', function (e) {
        let alreadyShown = el.querySelector('.dropdown-menu.show');

        document.querySelectorAll(openSelector).forEach(openDropdownEl => openDropdownEl.classList.remove('show'));
        document.querySelectorAll('.dropdown-btn').forEach(dropdownButtonEl => dropdownButtonEl.classList.remove('arrow'));

        if (!alreadyShown){
            el.querySelector('.dropdown-menu').classList.toggle('show');
            el.querySelector('.dropdown-btn').classList.toggle('arrow');
        }
    })
});

document.body.addEventListener('click', function (e) {
    let offsetParent = e.target.offsetParent;
    let isDropdownMenu = (offsetParent) ? offsetParent.classList.contains('dropdown') : false;

    if (!isDropdownMenu){
        document.querySelectorAll(openSelector).forEach(el => el.classList.remove('show'));
        document.querySelectorAll('.dropdown-btn').forEach(dropdownButtonEl => dropdownButtonEl.classList.remove('arrow'));
    }
});
