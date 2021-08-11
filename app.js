var purchasePrice = document.querySelector("#purchase-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var checkButton = document.querySelector("#check-button");
var display = document.querySelector(".output");

function percentageLoss(lossesBook,invested){

    var loss = (lossesBook / invested)*100;

    return loss;

}
function lossInPrice(invested,currentValue){

    var currentLoss = invested - currentValue;
    
    return currentLoss;
}
function calculatePercentageGain(profitBook, invested) {

    var percentGained = (profitBook / invested) * 100;

    return percentGained;

}

function changeInPrice(invested, currentValue) {

    var difference = currentValue - invested;

    return difference;

}

function stockPriceHandler() {


    var invested = Number(purchasePrice.value) * Number(stockQuantity.value);
    var currentValue = Number(currentPrice.value) * Number(stockQuantity.value);

    if (currentValue >= invested) {

        var profitBook = changeInPrice(invested, currentValue);

        var percentGained = calculatePercentageGain(profitBook, invested);

        
    }

    else{

        var lossesBook = lossInPrice(invested,currentValue);
        var losses = percentageLoss(lossesBook,invested);

         

    }
       display.innerText = "Your profit is " + profitBook + " and Percent Gained " + percentGained + "%.";

       display.innerText = "You lossed  " + lossesBook + " and Percent Loss " + losses + "%.";  




}

checkButton.addEventListener('click', stockPriceHandler)