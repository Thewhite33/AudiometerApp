let sn = document.querySelector("#sound");

sn.addEventListener("click",function(){
    let audio = new Audio("sound.mp3");
    audio.loop = false;
    audio.play();
})