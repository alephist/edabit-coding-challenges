import unittest

from typing import Tuple

from fullname_and_email import Employee

test_values: Tuple[Tuple[Employee, str, str, str, str]] = (
    (Employee("John", "Smith"), "John", "Smith",
     "John Smith", "john.smith@company.com"),
    (Employee("Mary",  "Sue"), "Mary", "Sue", "Mary Sue", "mary.sue@company.com"),
    (Employee("Anthony", "Walker"), "Anthony", "Walker",
     "Anthony Walker", "anthony.walker@company.com"),
    (Employee("Joshua", "Senoron"), "Joshua", "Senoron",
     "Joshua Senoron", "joshua.senoron@company.com")
)


class FullnameAndEmailTestCase(unittest.TestCase):
    def test_return_employee_fullname_and_email(self):
        for employee, expected_firstname, expected_lastname, expected_fullname, expected_email in test_values:
            with self.subTest():
                self.assertEqual(employee.firstname, expected_firstname)
                self.assertEqual(employee.lastname, expected_lastname)
                self.assertEqual(employee.fullname, expected_fullname)
                self.assertEqual(employee.email, expected_email)


if __name__ == '__main__':
    unittest.main()
