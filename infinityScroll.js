var height = 2000
window.addEventListener("scroll", function() {
    let infinitSpace = document.getElementById("body");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let heightToAdd = height + scrollTop + 300
    infinitSpace.style.height = heightToAdd + "px";
});
  