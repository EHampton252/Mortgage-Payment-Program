"use strict";
// Get the principal, interest rate, and period and create payment table button
const inputAmount = document.getElementById('input-amount');
const inputPeriod = document.getElementById('input-period');
const inputRate = document.getElementById('input-rate');
const createPayPlan = document.getElementById('create-payment-plan');
// Add an event listener to the button
createPayPlan.addEventListener('click', () => {
    const numPayments = parseInt(inputPeriod.value) * 12;
    const principal = parseInt(inputAmount.value);
    const interest = parseInt(inputRate.value) / 100;
    // Get the table body and clear any existing rows
    const tableBody = document.querySelector('#payment-schedule tbody');
    if (tableBody !== null) {
        tableBody.innerHTML = '';
        // Init variables to track principal paid, interest paid, 
        // principal remaining, and total monthly payment
        // Should be referenced in for loop and changed as the loop progresses
        // Calculate monthly payments
        let payment;
        let neum;
        let denom;
        neum = interest * Math.pow((1 + interest), (numPayments));
        denom = Math.pow((1 + interest), (numPayments)) - 1;
        payment = principal * (neum / denom);
        // Loop through the number of payments and create a new row for each one
        for (let i = 1; i <= numPayments; i++) {
            // Calculate each row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
        <td>Month ${i}</td>
        <td>${payment}</td>
        <td>25</td>
      `;
            tableBody.appendChild(newRow);
        }
    }
    else {
        console.error('Table body not found');
    }
});
