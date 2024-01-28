const helloWorldH1 = document.getElementById("helloWorld")
const helloWorlds = ["Hello World", "Bonjour le monde", "مرحباً بالعالم", "你好，世界", "Hej verden", "Tere maailmast", "Hallo Welt", "Γεια σου κόσμε", "Ciao mondo", "ハロー・ワールド", "헬로 월드", "Здравствуй мир", "Hola Mundo", "Привіт, світ."]

setInterval(function () {
    const random = Math.floor(Math.random() * helloWorlds.length)
    helloWorldH1.textContent = helloWorlds[random]
}, 1000)
