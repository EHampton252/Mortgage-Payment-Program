// Get the principal, interest rate, and period and create payment table button
const inputAmount = document.getElementById('input-field') as HTMLInputElement;
const inputPeriod = document.getElementById('input-period') as HTMLInputElement;
const inputRate = document.getElementById('input-rate') as HTMLInputElement;
const createPayPlan = document.getElementById('create-payment-plan') as HTMLButtonElement;

// Add an event listener to the button
createPayPlan.addEventListener('click', () => {
  const numRows = parseInt(inputPeriod.value);

  // Get the table body and clear any existing rows
  const tableBody = document.querySelector('#data-table tbody');
  tableBody.innerHTML = '';

  // Init variables to track principal paid, interest paid, principal remaining, and total monthly payment
  // Should be referenced in for loop and changed as the loop progresses
  // Calculate monthly payments

  // Loop through the number of rows and create a new row for each one
  for (let i = 1; i <= numRows; i++) {
    // Calculate each row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>Month ${i}</td>
      <td>John Doe</td>
      <td>25</td>
    `;
    tableBody.appendChild(newRow);
  }
});
