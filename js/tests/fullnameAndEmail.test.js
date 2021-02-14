const Employee = require("../fullnameAndEmail");

const emp1 = new Employee("John", "Smith");
const emp2 = new Employee("Mary", "Sue");
const emp3 = new Employee("Antony", "Walker");
const emp4 = new Employee("Joshua", "Senoron");

describe("Employee class", () => {
  describe("Should return firstname of employee", () => {
    const data = [
      [emp1, "John"],
      [emp2, "Mary"],
      [emp3, "Antony"],
      [emp4, "Joshua"]
    ];

    test.each(data)("%p = %p", (employee, result) => {
      let actual = employee.firstname;

      expect(actual).toEqual(result);
    });
  });

  describe("Should return lastname of employee", () => {
    const data = [
      [emp1, "Smith"],
      [emp2, "Sue"],
      [emp3, "Walker"],
      [emp4, "Senoron"]
    ];

    test.each(data)("%p = %p", (employee, result) => {
      let actual = employee.lastname;

      expect(actual).toEqual(result);
    });
  });

  describe("Should return fullname of employee", () => {
    const data = [
      [emp1, "John Smith"],
      [emp2, "Mary Sue"],
      [emp3, "Antony Walker"],
      [emp4, "Joshua Senoron"]
    ];

    test.each(data)("%p = %p", (employee, result) => {
      let actual = employee.fullname;

      expect(actual).toEqual(result);
    });
  });

  describe("Should return email of employee", () => {
    const data = [
      [emp1, "john.smith@company.com"],
      [emp2, "mary.sue@company.com"],
      [emp3, "antony.walker@company.com"],
      [emp4, "joshua.senoron@company.com"]
    ];

    test.each(data)("%p = %p", (employee, result) => {
      let actual = employee.email;

      expect(actual).toEqual(result);
    });
  });
});
