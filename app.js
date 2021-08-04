var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var display = document.querySelector(".output");
var log = console.log;
 var invested;
 var currentValue;

function calculateProfit(purchasePrice,stockQuantity,currentPrice){

    invested = purchasePrice * stockQuantity;
    currentValue = currentPrice * stockQuantity;

    var totalProfit = currentValue - invested;

    var percentageGained = Math.round((totalProfit / invested)*100);
   
    display.innerText = "You gained " + percentageGained + "%." + "Your total profit is ₹" + totalProfit +"."; 
    
}

function calculateLoss(purchasePrice,stockQuantity,currentPrice){
   invested = purchasePrice * stockQuantity;
   currentValue = currentPrice * stockQuantity;
   
   var  totalLoss = invested - currentValue;
   var  percentageLoss = Math.round((totalLoss/invested)*100);
    
   display.innerText = "You gained " + percentageLoss + "%." + "Your total profit is ₹" + totalLoss +".";


}

function stockPriceHandler(){

    if(currentPrice.value > purchasePrice.value){

        calculateProfit(purchasePrice.value,stockQuantity.value,currentPrice.value);

    }
    else {

        calculateLoss(purchasePrice.value,stockQuantity.value,currentPrice.value);
    }

    


};

checkButton.addEventListener('click', stockPriceHandler)