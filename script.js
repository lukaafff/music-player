let progress = document.querySelector('#progress');
let song = document.querySelector('#song');
let ctrIcon = document.querySelector('#ctrIcon');

song.onloadedmetadata = function() {
    song.pause();
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(ctrIcon.classList.contains("bx-pause")){
        song.pause();
        ctrIcon.classList.remove("bx-pause");
        ctrIcon.classList.add("bx-play");
    }
    else{
        song.play();
        ctrIcon.classList.remove("bx-play");
        ctrIcon.classList.add("bx-pause");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    ctrIcon.classList.remove("bx-play");
    ctrIcon.classList.add("bx-pause");
}