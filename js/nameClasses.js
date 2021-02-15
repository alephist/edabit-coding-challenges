// Problem# 163
// Write a class called Name and create the following attributes given a first name and last name (as fname and lname):
// An attribute called fullname which returns the first and last names.
// A attribute called initials which returns the first letters of the first and last name. Put a . between
// the two letters.
// Remember to allow the attributes fname and lname to be accessed individually as well.
// https://edabit.com/challenge/qNMtrtizgssAQqP2b

class Name {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get fname() {
    return `${this.#firstName.slice(0, 1).toUpperCase()}${this.#firstName
      .slice(1)
      .toLowerCase()}`;
  }

  get lname() {
    return `${this.#lastName.slice(0, 1).toUpperCase()}${this.#lastName
      .slice(1)
      .toLowerCase()}`;
  }

  get fullname() {
    return `${this.fname} ${this.lname}`;
  }

  get initials() {
    return `${this.fname.slice(0, 1)}.${this.lname.slice(0, 1)}`;
  }
}

module.exports = Name;
