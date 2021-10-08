window.addEventListener('keydown',(e)=>{
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`button[data-key="${e.keyCode}"]`);
    audio.currentTime=0;
    audio.play();
    key.classList.add('animate');
    setTimeout( () => key.classList.remove('animate'), 100);
    
});

document.getElementById('1').addEventListener("click",()=>{
    var audio1=new Audio("clap.wav");
    audio1.currentTime=0;
    audio1.play();
   
});
document.getElementById('2').addEventListener("click",()=>{
    var audio2=new Audio("hihat.wav");
    audio2.currentTime=0;
    audio2.play();
});
document.getElementById('3').addEventListener("click",()=>{
    var audio3=new Audio("kick.wav");
    audio3.currentTime=0;
    audio3.play();
});
document.getElementById('4').addEventListener("click",()=>{
    var audio4=new Audio("openhat.wav");
    audio4.currentTime=0;
    audio4.play();
});
document.getElementById('5').addEventListener("click",()=>{
    var audio5=new Audio("boom.wav");
    audio5.currentTime=0;
    audio5.play();
});
document.getElementById('6').addEventListener("click",()=>{
    var audio6=new Audio("ride.wav");
    audio6.currentTime=0;
    audio6.play();
});
document.getElementById('7').addEventListener("click",()=>{
    var audio7=new Audio("snare.wav");
    audio7.currentTime=0;
    audio7.play();
});
document.getElementById('8').addEventListener("click",()=>{
    var audio8=new Audio("tom.wav");
    audio8.currentTime=0;
    audio8.play();
});
document.getElementById('9').addEventListener("click",()=>{
    var audio9=new Audio("tink.wav");
    audio9.currentTime=0;
    audio9.play();
});
