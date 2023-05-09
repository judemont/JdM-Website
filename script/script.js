let y = 50;
function writeMessage(message){
    const MESSAGE_FONT = "800 20px monospace";
    const MESSAGE_STYLE = "green"
    ctx.font = MESSAGE_FONT;
    ctx.fillStyle = MESSAGE_STYLE;
    ctx.fillText(message, 50, y); 
    y += 30;
}

const c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;


writeMessage("Info: *JdM joined the chat*")
writeMessage("JdM: Hello, Welcome to my website ?")