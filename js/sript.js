function loading() {
    window.scrollTo(0, 0);

    setTimeout(()=>{
        document.getElementById('loading').style.display = "none";
        document.getElementById('body').style.overflowY = "scroll";
    }, 4000)
}


function playSong() {
    audios.yunk.volume = 0.1;
    if(audios.yunk.paused) {
        audios.yunk.play();
    } else {
        audios.yunk.pause();
    }
}

function playSong2() {
    audios.suiceboys.volume = 0.1;
    if(audios.suiceboys.paused) {
        audios.suiceboys.play();
    } else {
        audios.suiceboys.pause();
    }
}

function showForm() {
    var form = document.getElementById('container-main-form');
    form.classList.toggle('active');
}

var audios = {
    yunk: document.getElementById('yunk-audio'),
    suiceboys: document.getElementById('suiceboys')
}