// Problem# 199
// Given an object with students and the grades that they made on the tests that they took,
// determine which student has the best Test Average. The key will be the student's name and the value will be an
// array of their grades. You will only have to return the student's name.
// You do not need to return their Test Average.
// https://edabit.com/challenge/nSg24HbusyCQKn9xk

const getAvg = (grades) => grades.reduce((a, b) => a + b, 0) / grades.length;

const getBestStudent = (grades) => {
  const highestAvg = Math.max(...Object.values(grades).map(getAvg));

  const studentAvgList = Object.fromEntries(
    Object.entries(grades).map(([key, value]) => [key, getAvg(value)])
  );

  return Object.keys(grades).find((key) => studentAvgList[key] === highestAvg);
};

module.exports = getBestStudent;
