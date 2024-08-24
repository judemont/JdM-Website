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
}

function darkTheme() {
    let r = document.querySelector(':root');

    r.style.setProperty('--surface', '#141218');
    r.style.setProperty('--on-surface', '#E6E0E9');
    r.style.setProperty('--primary', '#D0BCFF');
    r.style.setProperty('--on-primary', '#381E72');
    r.style.setProperty('--primary-container', '#4F378B');
}

function lightTheme() {
    let r = document.querySelector(':root');

    r.style.setProperty('--surface', '#FEF7FF');
    r.style.setProperty('--on-surface', '#1D1B20');
    r.style.setProperty('--primary', '#6750A4');
    r.style.setProperty('--on-primary', '#FFFFFF');
    r.style.setProperty('--primary-container', '#EADDFF');
}

let theme = localStorage.getItem("theme");

setTheme(theme);