let body = document.querySelector("body");
body.style.backgroundColor = "#33bcf7ff";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "90dvh";

let container = document.querySelector(".main_container");
container.style.height = "maxContent";
container.style.width = "350px";
container.style.backgroundColor = "#a1bfcbff";
container.style.boxShadow = "5px 5px 15px rgba(3, 3, 3, 0.5)";
// container.style.borderWidth = "5px";
// container.style.borderStyle = "solid";
container.style.borderRadius = "10px";
container.style.border = "5px solid #e6ef65ff";
container.style.textAlign = "center";

let word = document.getElementById("word");
word.style.margin = "30px 0px";
word.style.width = "90%";
word.style.height = "25px";
word.style.borderRadius = "5px";

// let result_btn = document.getElementById("result");
result.style.backgroundColor = "#e6ef65ff";
result.style.width = "80px";
result.style.height = "30px";
result.style.borderRadius = "10px";

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        Check();
    }
})
function Check() {
    // My code

    let word = document.getElementById("word").value;

    let h4 = document.querySelector("h4");
    // let new_word = "";
    // for (let  i = word.length-1; i >= 0; i--) {
    //     new_word += word[i]; 
    // }
    // if (word == new_word) {
    //     h4.innerHTML = `Your word ${word} is a Palindrome`;
    // } else {
    //     h4.innerHTML = `Your word ${word} isn't a Palindrome `
    // }

    let Cleanword = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let new_word = Cleanword.split("").reverse().join("");

    if (Cleanword == new_word) {
        h4.innerHTML = `Your word ${Cleanword} is a Palindrome`;
    } else {
        h4.innerHTML = `Your word ${Cleanword} isn't a Palindrome `
    }
    
}