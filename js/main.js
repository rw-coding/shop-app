let menu = $(".hamburger-overlay");
let links = $(".hamburger-links");

function openmenu() {
    menu.animate({width: "100%"}, 600);
    links.animate({opacity: "1"}, 600);
}
function closemenu() {
    menu.animate({width: "0"}, 600);
    links.animate({opacity: "0"}, 600);
}