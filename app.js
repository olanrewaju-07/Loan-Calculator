// 1. LISTENIMG FOR SUBMIT
document.getElementById('loan-form').addEventListener('submit', function(e){

// HIDE RESULT
document.getElementById('result').style.display = 'none';

// SHOW RESULT
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResult, 2000);
e.preventDefault();
});

// 2. CALCULARTE RESULT FUNCTION
function calculateResult(){
console.log('calculating..')
// 3.BRINGING ALL UI VARIABLE NEEDED
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

//4. CALCULATING
const principal = parseFloat(amount.value);
const calculateInterest = parseFloat(interest.value) /100 / 12;
const calculatePayment = parseFloat(years.value)* 12;

// 5. COMPUTE MONTHLY PAYMENT
const x =Math.pow(1+ calculateInterest, calculatePayment);
const monthly =(principal*x*calculateInterest)/(x-1);

// 6 CREATING A VALIDATION FOR THE MONTHLY PAYMENT
if (isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatePayment).toFixed(2); 
  totalInterest.value = ((monthly * calculatePayment)- principal).toFixed(2);

    // SHOW RESULT
  document.getElementById('result').style.display = 'block';

  // HIDE LOADING
  document.getElementById('loading').style.display = 'none';
} else{
  showError('please check your number');

    // HIDE LOADING
    document.getElementById('loading').style.display = 'none';
}
}

// 6. TO ALERT THAT THERE IS AN ERROR
 function showError (error){
// 6.1 Create div 
const errorDiv = document.createElement('div');

// 6.2 Get element
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

//6.3  Add class 
errorDiv.className = 'alert alert-danger';

// 6.4 Create a text node and append
errorDiv.appendChild(document.createTextNode(error));

//6.5 Insert error above heading
card.insertBefore(errorDiv, heading);

// 6.6 Clear error after 3 seconds
setTimeout(clearError, 3000);

 }

 // creating function for the clearError
 function clearError (){
  document.querySelector('.alert').remove();
 }