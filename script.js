var timer = 60;
var score = 0;
var hitrn = 0;
var counter;

function makeBubble() {
    var clutter = "";

    for (var i = 0; i <= 183; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }
    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer() {
    counter = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerVal').textContent = timer;
        }
        else {
            clearInterval(counter);
            document.querySelector("#hitVal").textContent = 0;
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function hitVal() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function checkHitNum() {
    document.querySelector('#pbtm')
        .addEventListener("click", function (dets) {
            var clicknumber = Number(dets.target.textContent);
            if (clicknumber == hitrn) {
                increaseScore();
                hitVal();
                makeBubble();
            }
            else if (clicknumber !== hitrn) {
                // console.log(clicknumber)
                clearInterval(counter);
                document.querySelector('#pbtm').innerHTML = `<h1>Wrong Value hit</h1>`
            }

        })
}

makeBubble();
runTimer();
hitVal();
checkHitNum();

