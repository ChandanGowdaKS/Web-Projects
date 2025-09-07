const answer = document.querySelector("#answer");
function Calculate_amount() {
    const Bill_amount = parseFloat(document.getElementById("Bill_amount").value);
    const Service_rating = parseInt(document.getElementById("Service").value);
    const NumOfPeople = parseInt(document.getElementById("people").value);
    const Meal_type = document.getElementById("Meal_type").value;

    if (isNaN(Bill_amount) || isNaN(NumOfPeople)) {
        answer.innerText = "Please fill all Information";
        return;
    }

    let tip;
    switch (Service_rating) {
        case 1:
            tip = Bill_amount * 0.05;
            break;
        case 2:
            tip = Bill_amount * 0.10;
            break;
        case 3:
            tip = Bill_amount * 0.15;
            break;
        case 4:
            tip = Bill_amount * 0.20;
            break;
    }
    let total_amount = Bill_amount + tip;
    let amount_per_person = total_amount / NumOfPeople;

    if (Meal_type == "Dinner") {
        tip += 5;
        total_amount += 5;
        amount_per_person += 5/NumOfPeople ;
    }
    
    answer.innerHTML = `Tip: ₹${tip.toFixed(2)} <br> Total Amount: ₹${total_amount.toFixed(2)}
                                <br> Amount Per Person: ₹${amount_per_person.toFixed(2)}`
}