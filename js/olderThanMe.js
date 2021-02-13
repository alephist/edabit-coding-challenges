// Problem# 160
// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2
// and p3, which will be initialised with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.
// https://edabit.com/challenge/iwdZiFucR5wkQsFHu

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    let comparisonMsg;

    if (this.age > other.age) {
      comparisonMsg = "younger than";
    } else if (this.age < other.age) {
      comparisonMsg = "older than";
    } else {
      comparisonMsg = "the same age as";
    }

    return `${other.name} is ${comparisonMsg} me.`;
  }
}

module.exports = Person;
