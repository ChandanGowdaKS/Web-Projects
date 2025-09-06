const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

redSlider.addEventListener("input", updatecolor);
greenSlider.addEventListener("input", updatecolor);
blueSlider.addEventListener("input", updatecolor);

const redvalue = document.getElementById("redvalue");
const greenvalue = document.getElementById("greenvalue");
const bluevalue = document.getElementById("bluevalue");

function updatecolor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    console.log(red, green, blue);
    redvalue.innerText = red;
    greenvalue.innerText = green;
    bluevalue.innerText = blue;

    const color_container = document.querySelector(".color-container");
    const rgbcolor = `rgb(${red},${green},${blue})`;
    color_container.style.backgroundColor = rgbcolor;

    const displayvalue = document.getElementById("rgbvalue");
    displayvalue.innerText = rgbcolor;


}

function Copy() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    const rgbcolor = `rgb(${red},${green},${blue})`;
    
    // to copy to clipboard 
    navigator.clipboard.writeText(rgbcolor)
        .then(() => {
            alert("RGB Color Value copied to clipboard : "+ rgbcolor);
        })
        .catch((error) => {
            console.error("Failed to copy RGB values", error);
        });
    
}