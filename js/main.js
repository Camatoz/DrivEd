$(function () {
    initLangs();
})

function initLangs() {
    let but = $('a.nav-langs-button'),
    list = $('div.nav-langs-list');

    but.click(function () {
       
       if (list.is(':visible')) {
           list.slideUp(100);
           but.removeClass('nav-langs-button-hover');
       }    else {
           list.slideDown(100);
           but.addClass('nav-langs-button-hover');
       }
       
        return false;
    })
}