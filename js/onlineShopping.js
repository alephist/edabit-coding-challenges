// Create a function that determines whether a shopping order is eligible for free shipping.
// An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.
// https://edabit.com/challenge/5qYYauQwYwxz3nd9R

const freeShipping = (order) =>
  Object.values(order).reduce((a, b) => a + b, 0) > 50;

module.exports = freeShipping;
