const getStudentTopNotes = require("../studentTopNotes");

describe("getStudentTopNotes", () => {
  test("Return an array of top notes from each student", () => {
    const students = [
      {
        id: 1,
        name: "Jacek",
        notes: [5, 3, 4, 2, 5, 5]
      },
      {
        id: 2,
        name: "Ewa",
        notes: [2, 3, 3, 3, 2, 5]
      },
      {
        id: 3,
        name: "Zygmunt",
        notes: [2, 2, 4, 4, 3, 3]
      }
    ];

    let actual = getStudentTopNotes(students);

    expect(actual).toEqual([5, 5, 4]);
  });
});
