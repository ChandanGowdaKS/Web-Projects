

function CalculateBMI() {
    const gender = document.getElementById("Gender").value;
    const Age =  Number(document.getElementById("Age").value);
    const Height_feet =  Number(document.getElementById("Height").value);
    const Height_inches =  Number(document.getElementById("Height2").value);
    const weight = Number(document.getElementById("Weight").value);
    const totalInches = (Height_feet * 12) + Height_inches;
    const meters = totalInches * 0.0254;

        const BMI = weight / (meters * meters);
        const result = document.getElementById("result");

        let category;
        if (BMI < 18.5) {
            category = "Underweight";
        } else if (BMI >= 18.5 && BMI < 24.9) {
            category = "Normal Weight";
        } else if (BMI > 24.9 && BMI < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
        result.innerHTML = `Your BMI : ${BMI.toFixed(2)} <br> ${category}!`
        
    }
