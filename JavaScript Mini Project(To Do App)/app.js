let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
btn.addEventListener("click", function () {
    let li = document.createElement("li");
    li.innerText = inp.value;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.classList.add("delete");
    li.appendChild(dltBtn);
    ul.appendChild(li);
    inp.value = "";
});
// let del = document.querySelectorAll(".delete");
// for (dltbtn of del) {
//     dltbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     })
    
// }

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listitem = event.target.parentNode;
        listitem.remove();
        console.log("Item deleted");
    }
})