function calculatelove() {
    const name1 = document.getElementById("yourname").value.trim();
    const name2 = document.getElementById("partnername").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter the names");
    }
    else {
        const lovepercentage = Math.floor(Math.random() * 101);
        const result = document.querySelector("#result");

        result.innerHTML = `${name1} and ${name2} Love Percentage is ${lovepercentage}%`

        if (lovepercentage < 30) {
            result.innerHTML += "<br> Look for better option";
        }
        else if(lovepercentage >30 && lovepercentage < 50){
            result.innerHTML += "<br> average matching"
        }
        else if(lovepercentage >50 && lovepercentage < 75){
            result.innerHTML += "<br> Good Matching Holds good Relationship"
        }
        else{
            result.innerHTML += "<br> Excellent choice, It works Nice matching all the best"
        }
    }
}