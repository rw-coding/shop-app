let nashville = {lat: 36.174465, lng: -86.767960};
let mapEmbed = new google.maps.Map(document.getElementById("the-map"), {zoom: 4, center: nashville});

function open() {
    $(".hamburger-overlay").css("width","100%");
}
function close() {
    $(".hamburger-overlay").css("width","0");
}