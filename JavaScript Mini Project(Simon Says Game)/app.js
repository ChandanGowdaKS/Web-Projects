let gameseq = [];
let userseq = [];
let name = prompt("Enter your name");

let btn = ["red", "green", "yellow", "purple"];
let started = false;
let level = 0;
let h4 = document.querySelector("h4");
h4.innerText = `Welcome ${name} to Simon Says Game!`;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelup();
        
    }
})

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randomInx = Math.floor(Math.random() * btn.length); // Fix here
    let randomcolor = btn[randomInx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    flashbtn(randombtn);
}

function flashbtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function user_flashbtn(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}

function btnpress() {
    let clickedbtn = this;
    user_flashbtn(clickedbtn);
    let usercolor = clickedbtn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}
let allBtns = document.querySelectorAll(".box");

for (btns of allBtns) {
    btns.addEventListener("click", btnpress);
}

function checkans(indx) {
    if (userseq[indx] === gameseq[indx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    }
        else {
        h2.innerHTML = `Game Over! Your Score is ${level-1} Press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
            setTimeout(reset,1000);
        }
    
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}
