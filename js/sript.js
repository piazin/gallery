function loading() {
    window.scrollTo(0, 0);

    setTimeout(()=>{
        document.getElementById('loading').style.display = "none";
        document.getElementById('body').style.overflowY = "scroll";
    }, 4000)
}

var audio = document.getElementById('audio');
var isPlay = false;

function playSong() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
        isPlay = false;
    }
}