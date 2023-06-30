var figmaPrice = 30;
var phpPrice = 20;
var psPrice = 30;
var htmlPrice = 20;
var ccPrice = 30;
var pyPrice = 25;

var figmaHoursInput = document.getElementById("figmaHours");
var phpHoursInput = document.getElementById("phpHours");
var psHoursInput = document.getElementById("psHours");
var htmlHoursInput = document.getElementById("htmlHours");
var ccHoursInput = document.getElementById("ccHours");
var pyHoursInput = document.getElementById("pyHours");
var totalCostElement = document.getElementById("totalCost");

var inputs = [figmaHoursInput, phpHoursInput, psHoursInput, htmlHoursInput, ccHoursInput, pyHoursInput];

inputs.forEach(function (input) {
  input.addEventListener("change", updateServiceCost);
});

function updateServiceCost() {
  var figmaHours = parseInt(figmaHoursInput.value);
  var phpHours = parseInt(phpHoursInput.value);
  var psHours = parseInt(psHoursInput.value);
  var htmlHours = parseInt(htmlHoursInput.value);
  var ccHours = parseInt(ccHoursInput.value);
  var pyHours = parseInt(pyHoursInput.value);

  var figmaCost = figmaHours * figmaPrice;
  var phpCost = phpHours * phpPrice;
  var psCost = psHours * psPrice;
  var htmlCost = htmlHours * htmlPrice;
  var ccCost = ccHours * ccPrice;
  var pyCost = pyHours * pyPrice;

  var totalCost = figmaCost + phpCost + psCost + htmlCost + ccCost + pyCost;

  totalCostElement.textContent = "Total Cost: $" + totalCost;
  totalCostElement.classList.remove("hidden");
}