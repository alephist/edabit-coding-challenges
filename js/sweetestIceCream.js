// Problem# 154
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value
// of the sweetest icecream.
// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1,
// and the sweetness values for the flavors are as follows:
// Flavors	       Sweetness Value
// Plain	              0
// Vanilla	              5
// ChocolateChip	      5
// Strawberry	         10
// Chocolate	         10
// https://edabit.com/challenge/HKmJFmZZCX53ff4ke

class IceCream {
  constructor(flavor, numSprinkles) {
    this.flavor = flavor;
    this.numSprinkles = numSprinkles;
  }
}

const getTotalSweetness = (iceCream) => {
  let iceCreamSweetness;

  switch (iceCream.flavor) {
    case "Vanilla":
    case "ChocolateChip":
      iceCreamSweetness = 5;
      break;

    case "Strawberry":
    case "Chocolate":
      iceCreamSweetness = 10;
      break;

    default:
      iceCreamSweetness = 0;
  }

  return iceCreamSweetness + iceCream.numSprinkles;
};

const sweetestIceCream = (arr) => Math.max(...arr.map(getTotalSweetness));

module.exports = {
  IceCream,
  sweetestIceCream
};
