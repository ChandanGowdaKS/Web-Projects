document.getElementById("Loan_form").addEventListener("submit", function (e) {
    e.preventDefault();
    const LoanAmount = parseFloat(document.getElementById("Loan-amount").value);
    const InterestRate = parseFloat(document.getElementById("Interest").value);
    const LoanTerm = parseFloat(document.getElementById("Loan-Term").value);
    const result = document.getElementById("result");
    const Monthly_interest_rate = (InterestRate / 100/12);
    const monthly_payout = ((LoanAmount * Monthly_interest_rate * (Math.pow(1 + Monthly_interest_rate, LoanTerm))) / (Math.pow(1 + Monthly_interest_rate, LoanTerm) - 1));
    
    const Total_interest = (monthly_payout * LoanTerm) - LoanAmount;
    result.innerHTML = `Your Monthly Payment: ${monthly_payout.toFixed(2)} <br>
                        Total Interest: ${Total_interest.toFixed(2)}`

})
