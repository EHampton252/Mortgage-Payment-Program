// Get the principal, interest rate, and period and create payment table button
var inputAmount = document.getElementById('input-amount');
var inputPeriod = document.getElementById('input-period');
var inputRate = document.getElementById('input-rate');
var createPayPlan = document.getElementById('create-payment-plan');
// Add an event listener to the button
createPayPlan.addEventListener('click', function () {
    var numPayments = parseInt(inputPeriod.value) * 12;
    var principal = parseInt(inputAmount.value);
    var interest = parseInt(inputRate.value) / 1200;
    // Get the table body and clear any existing rows
    var tableBody = document.querySelector('#payment-schedule tbody');
    if (tableBody !== null) {
        tableBody.innerHTML = '';
        // Init variables to track principal paid, interest paid, 
        // principal remaining, and total monthly payment
        // Should be referenced in for loop and changed as the loop progresses
        // Calculate monthly payments
        var payment = void 0;
        var neum = void 0;
        var denom = void 0;
        neum = interest * Math.pow((1 + interest), (numPayments));
        denom = Math.pow((1 + interest), (numPayments)) - 1;
        payment = principal * (neum / denom);
        // Variable to track outstanding loan balance, principal payment, 
        var OLB = principal;
        var prinPay = void 0;
        var intPay = void 0;
        var ytdPrincipal = 0;
        var ytdInterest = 0;
        var ytdPayments = 0;
        // Loop through the number of payments and create a new row for each one
        for (var i = 1; i <= numPayments; i++) {
            // Calculate each row
            var newRow = document.createElement('tr');
            intPay = (OLB * interest);
            prinPay = payment - intPay;
            OLB -= prinPay;
            ytdPrincipal += prinPay;
            ytdInterest += intPay;
            ytdPayments += payment;
            newRow.innerHTML = "\n        <td>Month ".concat(i, "</td>\n        <td>").concat(payment.toFixed(2), "</td>\n        <td>").concat(prinPay.toFixed(2), "</td>\n        <td>").concat(intPay.toFixed(2), "</td>\n        <td>").concat(ytdPrincipal.toFixed(2), "</td>\n        <td>").concat(OLB.toFixed(2), "</td>\n        <td>").concat(ytdInterest.toFixed(2), "</td>\n        <td>").concat(ytdPayments.toFixed(2), "</td>\n      ");
            tableBody.appendChild(newRow);
        }
    }
    else {
        console.error('Table body not found');
    }
});
