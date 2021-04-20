const pluralize = require("../pluralize");

const data = [
  [
    ["cow", "pig", "cow", "cow"],
    ["cows", "pig"]
  ],
  [["table", "table", "table"], ["tables"]],
  [
    ["chair", "pencil", "arm"],
    ["chair", "pencil", "arm"]
  ],
  [["list"], ["list"]],
  [
    [
      "set",
      "set",
      "tuple",
      "tuple",
      "string",
      "string",
      "string",
      "string",
      "integer"
    ],
    ["sets", "tuples", "strings", "integer"]
  ]
];

describe("pluralize", () => {
  describe("Return words in plural form if they appear more than once in the list", () => {
    test.each(data)("pluralize(%p) = %p", (arr, result) => {
      let actual = pluralize(arr);

      expect(actual).toEqual(result);
    });
  });
});
