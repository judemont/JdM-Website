const dpi = document.getElementById("dpi").offsetHeight;
const deepEl = document.getElementById("deep")
document.addEventListener("scroll", function(){
    let deep = px2m(window.scrollY, dpi)
    deepEl.innerText = roundUp(deep, 1)  + "M"
})

function px2m(px, dpi) {
    return px * 0.0254 / dpi 
}

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}