// Problem# 162
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com
// at the end. Make sure the entire email is in lowercase.
// https://edabit.com/challenge/kGLhgwGaLJsCMS7wS

class Employee {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  get email() {
    return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
  }
}

module.exports = Employee;
