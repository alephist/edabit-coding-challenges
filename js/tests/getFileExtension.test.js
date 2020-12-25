const getExtension = require("../getFileExtension");

const data = [
  [
    ["project1.jpg", "project1.pdf", "project1.mp3"],
    ["jpg", "pdf", "mp3"]
  ],
  [
    ["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"],
    ["rb", "cpp", "py", "js"]
  ],
  [
    ["code.html", "code.css"],
    ["html", "css"]
  ],
  [
    ["minesweeper.java", "game.java", "my_project.java"],
    ["java", "java", "java"]
  ]
];

describe("getExtension", () => {
  describe("Return array of file extensions", () => {
    test.each(data)("getExtension(%p) = %p", (arr, result) => {
      let actual = getExtension(arr);

      expect(actual).toEqual(result);
    });
  });
});
