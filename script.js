function makeBubble(){
    var clutter = "";

for(var i=0; i<=183; i++){
    clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
}
document.querySelector('#pbtm').innerHTML = clutter;
}

var timer = 60;
function runTimer(){
   var counter = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerVal').textContent=timer;
        }
        else{
            clearInterval(counter);
        }
    },1000);
}
makeBubble();
runTimer()