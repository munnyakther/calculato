var currentDateElement = document.getElementById("currentDate");
var currentDate = new Date();
currentDateElement.textContent = currentDate.toLocaleDateString();
currentDateElement.setAttribute("datetime", currentDate.toISOString());

function age() {
  var d1 = parseInt(document.getElementById("date").value); // Convert date input to integer
  var m1 = parseInt(document.getElementById("month").value); // Convert month input to integer
  var y1 = parseInt(document.getElementById("year").value); // Convert year input to integer
  var currentDate = new Date(); // Get the current date
  var d2 = currentDate.getDate();
  var m2 = 1 + currentDate.getMonth();
  var y2 = currentDate.getFullYear();
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + monthDays[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  document.getElementById("output_4").innerHTML =
    +y + " Years " + m + " Months " + d + " Days";
  var amount_input = parseFloat(document.getElementById("amount").value);
  var rate_input = parseFloat(document.getElementById("rate").value);
  var rate_time = parseFloat(document.getElementById("time").value);

  var interest = (amount_input * rate_input * rate_time) / 100;

  var total = interest + amount_input;


  document.getElementById("output_1").innerHTML = amount_input.toFixed(2); // Use toFixed(2) to display with 2 decimal places
  document.getElementById("output_2").innerHTML = interest.toFixed(2);
  document.getElementById("output_3").innerHTML = total.toFixed(2);
}
