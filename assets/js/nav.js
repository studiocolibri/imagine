
// Main nav : keyboard navigation and accessibility
var navBtnOpen = document.querySelector('.site-nav__button');
var navCheckbox = document.querySelector('.site-nav__checkbox');

var openNav = function() {
    document.body.classList.add("nav-opened");
    navBtnOpen.setAttribute('aria-expanded', true);
}
var closeNav = function() {
    document.body.classList.remove("nav-opened");
    navBtnOpen.setAttribute('aria-expanded', false);
}
var toggleNav = function() {
    if (navCheckbox.checked == false) {
        navCheckbox.checked = true;
        openNav();
    }
    else {
        navCheckbox.checked = false;
        closeNav();
    }
};
navBtnOpen.addEventListener('click', toggleNav);

// aria-expanded + body class toggle
navCheckbox.addEventListener('change', function() {
    if (navCheckbox.checked == true) { 
        openNav();
    } else {
        closeNav();
    }
});

// Escape key => close nav
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) { closeNav(); }
});