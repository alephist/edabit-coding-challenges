// Write a function that has two parameters: orders and cost. Return any orders that are greater than the cost.
// https://edabit.com/challenge/EvPxDapyKECM9CrLR

const expensiveOrders = (order, cost) =>
  Object.fromEntries(Object.entries(order).filter(([key, val]) => val > cost));

module.exports = expensiveOrders;
