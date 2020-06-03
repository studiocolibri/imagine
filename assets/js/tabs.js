var tabsBtns = document.getElementsByClassName("numero-section-two__tab__btn");
var tabsImgs = document.getElementsByClassName("numero-section-two__tab__img");
var tabsContents = document.getElementsByClassName("numero-section-two__tab__content");

function openTab(num) {
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