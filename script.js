const helloWorldH1 = document.getElementById("helloWorld");
const helloWorlds = ["Hello World", "Bonjour le monde", "مرحباً بالعالم", "你好，世界", "Hej verden", "Tere maailmast", "Hallo Welt", "Γεια σου κόσμε", "Ciao mondo", "ハロー・ワールド", "헬로 월드", "Здравствуй мир", "Hola Mundo", "Привіт, світ."];
const mainContent = document.getElementById("mainContent");

function displaySection(id) {
    console.log(id);
    
    Array.from(mainContent.getElementsByTagName("div")).forEach(div => {
        div.style.visibility = "hidden";
    });

    document.getElementById(id).style.visibility = "visible";
}

let interval = setInterval(function() {
    let counter = 0;
    const langInterval = setInterval(function () {
        counter++;

        const random = Math.floor(Math.random() * helloWorlds.length);
        helloWorldH1.textContent = helloWorlds[random];

        if (counter >= 10) {
            helloWorldH1.textContent = helloWorlds[0];
            clearInterval(langInterval);
        }
    }, 90);
    clearInterval(interval);
}, 5000);
