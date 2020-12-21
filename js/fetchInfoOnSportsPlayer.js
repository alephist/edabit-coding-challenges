// Create a class that takes the following four arguments for a particular football player:
// name, age, height, weight
// Also, create three functions for the class that returns the following strings:
// getAge() returns "name is age age"
// getHeight() returns "name is height cm"
// getWeight() returns "name weighs weight kg"
// https://edabit.com/challenge/ZngT4zDckDugt2JGY

class Player {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge() {
    return `${this.name} is age ${this.age}`;
  }

  getHeight() {
    return `${this.name} is ${this.height}cm`;
  }

  getWeight() {
    return `${this.name} weighs ${this.weight}kg`;
  }
}

module.exports = Player;
