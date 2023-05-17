
const elemRoot = document.documentElement;
function openFullScreen() {
    
  
    if (!document.fullscreenElement) {
        elemRoot.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        );
      });
    } else {
     // document.exitFullscreen();
    }
  }

document.addEventListener("click", function(e){
    openFullScreen();
})
