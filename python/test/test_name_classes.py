import unittest

from typing import Tuple

from name_classes import Name

test_values: Tuple[Tuple[Name, str, str, str, str]] = (
    (Name("john", "SMITH"), "John", "Smith", "John Smith", "J.S"),
    (Name("sARah", "fRolliE"), "Sarah", "Frollie", "Sarah Frollie", "S.F")
)


class NameClassTestCase(unittest.TestCase):
    def test_return_first_and_last_names_with_fullname_and_initials(self):
        for name, expected_fname, expected_lname, expected_fullname, expected_initials in test_values:
            with self.subTest():
                self.assertEqual(name.fname, expected_fname)
                self.assertEqual(name.lname, expected_lname)
                self.assertEqual(name.fullname, expected_fullname)
                self.assertEqual(name.initials, expected_initials)


if __name__ == '__main__':
    unittest.main()
