let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(Idx) {
    // console.log("curr level:", level);

    if (userSeq[Idx] === gameSeq[Idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 250);
        }
    } else {
        h2.innerHTML = `Game over! Your Score was <b>${level} </b> <br> press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}