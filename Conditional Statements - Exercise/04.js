function calculateProfit(input) {
    // Get excursion price and number of each toy
    let excursionPrice = Number(input[0]);
    let numPuzzles = Number(input[1]);
    let numTalkingDolls = Number(input[2]);
    let numTeddyBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);
    
    // Calculate the total cost of the toys
    let totalCost = (numPuzzles * 2.60) + (numTalkingDolls * 3) + (numTeddyBears * 4.10) + (numMinions * 8.20) + (numTrucks * 2);
    
    // Check if the number of toys is 50 or more
    let numToys = numPuzzles + numTalkingDolls + numTeddyBears + numMinions + numTrucks;
    if (numToys >= 50) {
      // Apply 25% discount
      totalCost = totalCost - (totalCost * 0.25);
    }
    
    // Subtract the rent
    totalCost = totalCost - (totalCost * 0.1);
    
    // Compare the final amount to the excursion price
    let remainingMoney = totalCost - excursionPrice;
    
    // Check if Petya has enough money
    if (remainingMoney >= 0) {
      console.log(`Yes! ${remainingMoney.toFixed(2)} lv left.`);
    } else {
      console.log(`Not enough money! ${Math.abs(remainingMoney).toFixed(2)} lv needed.`);
    }
  }