let body = document.querySelector("body");
body.style.backgroundColor = "#a3e8b0ff";
// body.style.height = "100vh";
body.style.margin = "0px";
body.style.padding = "0px";

let main = document.querySelector(".main_container");

main.style.display = "flex";
main.style.flexDirection = "column"
main.style.justifyContent = "center";
main.style.alignItems = "center";
main.style.height = "100dvh";

let container = document.querySelector(".container");
container.style.borderColor = "#4467cfff";
container.style.borderRadius = "10px";
container.style.borderWidth = "5px";
container.style.borderStyle = "solid";
container.style.boxShadow = "10px 10px 20px 0px rgba(184, 28, 202, 0.5)";
container.style.width = "300px";
container.style.height = "350px";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.margin = "0px";
container.style.padding = "0px";
container.style.backgroundColor = "#d9edbbff"

let h2 = document.querySelector("h2");
h2.style.textDecoration = "underline";
h2.addEventListener("mouseover", () => {
    h2.style.color = "#e50baeff";
})
h2.addEventListener("mouseout", () => {
    h2.style.color = "#000";
})
let counterBtn = document.querySelector(".counter-btn");
counterBtn.style.margin = "0px"

let btns = document.querySelectorAll(".Counterbtn");
btns.forEach(btn => {
    btn.style.padding = "20px";
    btn.style.margin = "20px";
    btn.style.backgroundColor = "#44cf4dff";
    btn.style.width = "80px";
    btn.style.borderWidth = "5px";
    btn.style.borderRadius = "10px";
    btn.style.fontSize = "25px";
    btn.style.fontWeight = "bolder";
    btn.style.color = "#fff";
    // btn.style.
})

let reset = document.getElementById("reset");
reset.style.width = "100px";
reset.style.height = "50px";
reset.style.backgroundColor = "#f11b50ff";
reset.style.fontSize = "15px";
reset.style.fontWeight = "bolder";
reset.style.color = "#fff";


// functions

let num = 0;
let h1 = document.querySelector("h1");
function plus() {
    ++num;
    h1.innerHTML =`${num}` ;
}
function minus() {
    --num;
    h1.innerHTML =`${num}` ;
}
function resetting() {
    num = 0;
    h1.innerText =`${num}` ;
}