import unittest

from typing import Dict, Tuple

from assign_person_to_occupation import assign_person_to_job


class AssignPersonToOccupationTestCase(unittest.TestCase):
    def test_assign_person_to_respective_occupation(self):
        names = ["Annie", "Steven", "Lisa", "Osman"]
        jobs = ["Teacher", "Engineer", "Doctor", "Cashier"]
        expected = {
            'Annie': 'Teacher',
            'Steven': 'Engineer',
            'Lisa': 'Doctor',
            'Osman': 'Cashier'
        }
        self.assertEqual(assign_person_to_job(names, jobs), expected)


if __name__ == '__main__':
    unittest.main()
