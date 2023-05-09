const c = document.getElementById("mainCanvas");
var ctx = c.getContext("2d");

c.width = window.innerWidth;
c.height = window.innerHeight;


ctx.font = "30px Arial";
ctx.fillText("*JdM joined the chat*", 0, 10); 
ctx.stroke();