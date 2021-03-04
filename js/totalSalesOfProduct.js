// Problem# 193
// In this question you will be given a table, where the first row lists the names of products, and each of row
// after that lists the sales of the product for each day (over some time range).
// Write a function that receives:
// A sales table sales.
// The name of a product product and returns the total sales if the product is on the array,
// otherwise return the string "Product not found".
// https://edabit.com/challenge/ZyRoiEiegKfLued8g

const totalSales = (sales, product) => {
  const [header, ...productSales] = sales;

  const headerIndex = header.indexOf(product);

  if (headerIndex === -1) return "Product not found";

  return productSales.reduce((acc, curr) => acc + curr[headerIndex], 0);
};

module.exports = totalSales;
