let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

let timer = document.getElementById("timer");

let msec = 0;
let sec = 0;
let mins = 0;

let timerId = null;

let startTimer = () => {
    msec++;

    if(msec == 100){
        msec = 0;
        sec++;
    }
    if(sec == 60){
        sec = 0;
        mins++;
    }

    let msecString;
    let secString;
    let minsString;
    if(msec < 10){
        msecString = `0${msec}`;
    }
    else {
        msecString = msec;
    }

    if(sec < 10){
        secString = `0${sec}`;
    }
    else {
        secString = sec;
    }

    if(mins < 10){
        minsString = `0${mins}`;
    }
    else {
        minsString = mins;
    }


    timer.innerHTML = `${minsString} : ${sec} : ${msecString}`;
}

start.addEventListener("click", function(){
    if(timerId != null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

pause.addEventListener("click", function(){
    clearInterval(timerId);
});

reset.addEventListener("click", function(){
    clearInterval(timerId);
    timer.innerHTML = `00 : 00 : 00`;

    msec = sec = mins = 0;
});


