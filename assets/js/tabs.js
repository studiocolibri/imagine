var tabsBtns = document.getElementsByClassName("numero-section-two__tab__btn");
var tabsImgs = document.getElementsByClassName("numero-section-two__tab__img");
var tabsContents = document.getElementsByClassName("numero-section-two__tab__content");

// add listeners on all tab links
for (var y=0; y < tabsBtns.length; y++) {
    tabsBtns[y].addEventListener('click', function(e) {
        var num = this.dataset.num;
        openTab(e, num);
    })
}

// open the right tab and close others
function openTab(e, num) {
    e.preventDefault();
    for (var i=0; i< tabsContents.length; i++) {
        tabsContents[i].style.display = 'none';
    }
    for (var y=0; y < tabsBtns.length; y++) {
        tabsBtns[y].classList.remove('selected');
    }
    for (var z=0; z < tabsImgs.length; z++) {
        tabsImgs[z].classList.remove('selected');
    }
    tabsBtns[num].classList.add('selected');
    tabsImgs[num].classList.add('selected');
    tabsContents[num].style.display = 'block';
}