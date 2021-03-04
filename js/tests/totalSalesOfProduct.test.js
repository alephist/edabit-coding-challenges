const totalSales = require("../totalSalesOfProduct");

const table1 = [
  ["A", "B", "C"],
  [2, 7, 1],
  [3, 6, 6],
  [4, 5, 5]
];

const table2 = [
  ["W", "X", "Y", "Z"],
  [3, 5, 7, 1],
  [4, 5, 2, 3]
];

const table3 = [
  ["R", "T", "V", "W", "C"],
  [2, 3, 7, 7, 4],
  [8, 5, 2, 9, 0],
  [2, 5, 8, 7, 4],
  [5, 3, 7, 2, 3]
];

describe("totalSales", () => {
  test("Return total sales of product name", () => {
    expect(totalSales(table1, "A")).toEqual(9);
    expect(totalSales(table1, "B")).toEqual(18);
    expect(totalSales(table1, "C")).toEqual(12);

    expect(totalSales(table2, "W")).toEqual(7);
    expect(totalSales(table2, "Y")).toEqual(9);
    expect(totalSales(table2, "Z")).toEqual(4);

    expect(totalSales(table3, "T")).toEqual(16);
    expect(totalSales(table3, "W")).toEqual(25);
  });

  test("Return 'Product not found' if product name is not on the sales array", () => {
    expect(totalSales(table1, "D")).toEqual("Product not found");

    expect(totalSales(table2, "A")).toEqual("Product not found");

    expect(totalSales(table3, "A")).toEqual("Product not found");
    expect(totalSales(table3, "Y")).toEqual("Product not found");
  });
});
