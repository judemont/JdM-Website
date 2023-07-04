var height = 0
window.addEventListener("scroll", function() {
    let infinitSpace = document.getElementById("infinitSpace");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let heightToAdd = height + scrollTop + 100
    infinitSpace.style.height = heightToAdd + "px";
});
  