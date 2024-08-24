const r = document.querySelector(':root');
const socialIconsIds = ["githubIcon", "signalIcon", "telegramIcon", "discordIcon"];

function switchTheme() {
    let theme = localStorage.getItem("theme");

    setTheme(theme == "light" ? "dark" : "light");
}

function setTheme(theme) {    
    if(theme == "dark") {
        darkTheme();
        localStorage.setItem("theme", "dark");
    } else {
        lightTheme();
        localStorage.setItem("theme", "light");
    }

    document.body.classList.add("appearance-animation");

    setTimeout(()=>{
        document.body.classList.remove("appearance-animation");
    }, 2050)
}

function darkTheme() {
    let switchThemeImage = document.getElementById("switchThemeImage");


    r.style.setProperty('--surface', '#141218');
    r.style.setProperty('--on-surface', '#E6E0E9');
    r.style.setProperty('--primary', '#D0BCFF');
    r.style.setProperty('--on-primary', '#381E72');
    r.style.setProperty('--primary-container', '#4F378B');

    switchThemeImage.src = "images/sun.svg";

    for (let i = 0; i < socialIconsIds.length; i++) {
        const el = document.getElementById(socialIconsIds[i])
        el.src =  el.src.replace("dark_", "").replace(".svg", "") + "_dark.svg";
    }
}

function lightTheme() {
    let switchThemeImage = document.getElementById("switchThemeImage");

    r.style.setProperty('--surface', '#FEF7FF');
    r.style.setProperty('--on-surface', '#1D1B20');
    r.style.setProperty('--primary', '#6750A4');
    r.style.setProperty('--on-primary', '#FFFFFF');
    r.style.setProperty('--primary-container', '#EADDFF');

    switchThemeImage.src = "images/moon.svg";

    for (let i = 0; i < socialIconsIds.length; i++) {
        const el = document.getElementById(socialIconsIds[i])
        el.src = el.src.replace("_dark", "");
    }
}

let theme = localStorage.getItem("theme");

setTheme(theme);