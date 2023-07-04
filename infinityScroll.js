var defaultHeight = 2000
var defaultBackSize = 105

window.addEventListener("scroll", function() {
    let body = document.getElementById("body");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop < 1210){
        body.style.backgroundSize = defaultBackSize + scrollTop/20 + "%"
    }else{
        body.style.backgroundSize = (defaultBackSize - scrollTop) + "%"
    }

    let heightToAdd = defaultHeight + scrollTop + 300
    body.style.height = heightToAdd + "px";
});