/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
}
*/

var totalMoney = prompt("Enter any amount of money:");
var quarter = 25;
var dime = 10;
var nickel = 5;
var penny = 1;
console.log("input: " + totalMoney)

function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  var originalTotalMoney = totalMoney;
  totalMoney *= 100;
  while (totalMoney > 0) {
    while (totalMoney - quarter > 0) {
      coinPurse.quarters += 1;
      totalMoney -=  quarter;
    } while (totalMoney - dime > 0) {
      coinPurse.dimes += 1;
      totalMoney -= dime;
    } while (totalMoney - nickel > 0) {
      coinPurse.nickels += 1;
      totalMoney -= nickel;
    } while(totalMoney - penny >= 0) {
      coinPurse.pennies += 1;
      totalMoney -= penny;
      if (totalMoney === 0) {
        break;
      }
    }
  }

  document.getElementById("answer").innerHTML = "There are " + coinPurse.quarters + " quarters, " + coinPurse.dimes + " dimes, " + coinPurse.nickels + " nickels and " + coinPurse.pennies + " pennies in $" + originalTotalMoney + ".";
}

coinCounter();
