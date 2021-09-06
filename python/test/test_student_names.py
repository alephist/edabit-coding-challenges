import unittest

from typing import Dict, List, Tuple

from student_names import get_student_names

test_values: Tuple[Tuple[Dict[str, str], List[str]]] = (
    ({"Student 1": "Steve", "Student 2": "Becky",
     "Student 3": "John"}, ["Becky", "John", "Steve"]),
    ({"Student 1": "Jacek", "Student 2": "Ewa", "Student 3": "Zygmunt",
     "Student 4": "Tomek"}, ["Ewa", "Jacek", "Tomek", "Zygmunt"])
)


class StudentNamesTestCase(unittest.TestCase):
    def test_get_sorted_student_names(self):
        for students, expected_list in test_values:
            with self.subTest():
                self.assertEqual(get_student_names(students), expected_list)


if __name__ == '__main__':
    unittest.main()
