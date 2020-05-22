window.onload = function() {

    // Main nav : keyboard navigation and accessibility
    let navBtnOpen = document.querySelector('.site-nav__button');
    let navCheckbox = document.querySelector('.site-nav__checkbox');

    let openNav = function() {
        navCheckbox.checked = true;
        navBtnOpen.setAttribute('aria-expanded', true);
    }
    let closeNav = function() {
        navCheckbox.checked = false;
        navBtnOpen.setAttribute('aria-expanded', false);
    }
    let toggleNav = function() {
        if (navCheckbox.checked == false) {
            openNav();
        }
        else {
            closeNav();
        }
    };
    navBtnOpen.addEventListener('click', toggleNav);
    
    // aria-expanded + body class toggle
    navCheckbox.addEventListener('change', function() {
        if (navCheckbox.checked == true) { 
            navBtnOpen.setAttribute('aria-expanded', true);
            window.scrollTo(0,0);
            document.body.classList.add("nav-opened");
        } else {
            navBtnOpen.setAttribute('aria-expanded', false);
            document.body.classList.remove("nav-opened");
        }
    });
    
    // Escape key => close nav
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) { closeNav(); }
    });
}