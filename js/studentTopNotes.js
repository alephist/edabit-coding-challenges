// Problem# 187
// Create a function that takes an array of students and returns an array of their top notes.
// If the student does not have notes then let's assume their top note is equal to 0.
// https://edabit.com/challenge/b7dXbWEhbr3bXCk7i

const getStudentTopNotes = (students) =>
  students.map(({ notes }) => (notes.length ? Math.max(...notes) : 0));

module.exports = getStudentTopNotes;
