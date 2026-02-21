function calculate() {
    let income = parseFloat(document.getElementById("income").value);
    let expense = parseFloat(document.getElementById("expense").value);

    if (isNaN(income) || isNaN(expense)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
        return;
    }

    let balance = income - expense;

    document.getElementById("result").innerText =
        "Remaining Balance: ₹ " + balance;
}
