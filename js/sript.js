function loading() {
    setTimeout(()=>{
        document.getElementById('loading').style.display = "none";
        document.getElementById('body').style.overflowY = "scroll"
    }, 4000)
}