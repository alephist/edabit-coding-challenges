// You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers
// (the hourly wages of each programmer) and returns the difference between the highest-paid programmer
// and the lowest-paid.
// https://edabit.com/challenge/BYZW3yNmG99eLpSdR

const programmers = (...args) => Math.max(...args) - Math.min(...args);

module.exports = programmers;
