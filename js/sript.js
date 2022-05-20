function loading() {
    window.scrollTo(0, 0);

    setTimeout(()=>{
        document.getElementById('loading').style.display = "none";
        document.getElementById('body').style.overflowY = "scroll";
    }, 4000)
}

var audio = document.getElementById('audio');
function playSong() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function showForm() {
    var form = document.getElementById('container-main-form');

    form.classList.toggle('active');
}