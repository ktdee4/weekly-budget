//Date function
var today = new Date();
var date = document.getElementById("date");
date.innerHTML = "<h2>Week of:</h2>" + today.toDateString();

//Non-date variables
var deduct = document.getElementById('deduct');

//Function to subtract purchase from balance
function changeBalance() {
  var balance = document.getElementById('balance').value;
var purchase = document.getElementById('purchase').value;
var subtract = document.getElementById('subtract').value;
  var remainder = parseFloat(balance) - parseFloat(subtract);
  //balance = remainder;
  
  if(!isNaN(remainder)) {
    document.getElementById(result).innerText = "New Balance: " + remainder;
  }
}
/*function test(){
	alert("Hello world!");
}*/

//Deduct button event listener
//deduct.addEventListener('click', changeBalance);
deduct.addEventListener('click', changeBalance);