// Get the principal, interest rate, and period and create payment table button
const inputAmount = document.getElementById('input-amount') as HTMLInputElement;
const inputPeriod = document.getElementById('input-period') as HTMLInputElement;
const inputRate = document.getElementById('input-rate') as HTMLInputElement;
const createPayPlan = document.getElementById('create-payment-plan') as HTMLButtonElement;

// Add an event listener to the button
createPayPlan.addEventListener('click', () => {
  const numPayments = parseInt(inputPeriod.value) * 12;
  const principal = parseInt(inputAmount.value);
  const interest: number = parseInt(inputRate.value)/1200;

  // Get the table body and clear any existing rows
  const tableBody = document.querySelector('#payment-schedule tbody');
  if (tableBody !== null) {
    tableBody.innerHTML = '';

    // Init variables to track principal paid, interest paid, 
    // principal remaining, and total monthly payment
    // Should be referenced in for loop and changed as the loop progresses
    // Calculate monthly payments
    let payment: number;
    let neum: number;
    let denom: number;

    neum = interest * Math.pow((1+interest), (numPayments));
    denom = Math.pow((1+interest), (numPayments)) - 1;
    payment = principal * (neum/denom);

    // Variable to track outstanding loan balance, principal payment, 
    let OLB: number = principal;
    let prinPay: number;
    let intPay: number;
    let ytdPrincipal: number = 0;
    let ytdInterest: number = 0;
    let ytdPayments: number = 0;

    // Loop through the number of payments and create a new row for each one
    for (let i = 1; i <= numPayments; i++) {
      // Calculate each row
      const newRow = document.createElement('tr');
      
      intPay = (OLB * interest);
      prinPay = payment - intPay;
      OLB -= prinPay;
      ytdPrincipal += prinPay;
      ytdInterest += intPay;
      ytdPayments += payment;
      
      newRow.innerHTML = `
        <td>Month ${i}</td>
        <td>${payment.toFixed(2)}</td>
        <td>${prinPay.toFixed(2)}</td>
        <td>${intPay.toFixed(2)}</td>
        <td>${ytdPrincipal.toFixed(2)}</td>
        <td>${OLB.toFixed(2)}</td>
        <td>${ytdInterest.toFixed(2)}</td>
        <td>${ytdPayments.toFixed(2)}</td>
      `;
      tableBody.appendChild(newRow);
    }
  }
  else {
    console.error('Table body not found');
  }
});
