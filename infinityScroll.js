var height = 2000
window.addEventListener("scroll", function() {
    let body = document.getElementById("body");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let heightToAdd = height + scrollTop + 300
    body.style.height = heightToAdd + "px";
});
  