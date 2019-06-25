//Date function
var today = new Date();
var date = document.getElementById("date");
date.innerHTML = "<h2>Date:</h2>" + today.toDateString();

//Deduct balance function
function display(){
  var deduct = document.getElementById('deduct');
  var balance = document.getElementById('balance').textContent;
  var purchase = document.getElementById('purchase').value;
  var remainder = balance - purchase;
  var result = document.getElementById('result');
  result.textContent = "New Balance: $" + remainder;
}

//Deduct button event listener
deduct.addEventListener('click', display);