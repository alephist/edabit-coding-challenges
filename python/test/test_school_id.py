import unittest

from typing import Tuple

from school_id import create_id

test_values: Tuple[Tuple[str, str, str]] = (
    ("mary", "smith", "mSmi"),
    ("S", "WORKING", "sWor"),
    ("joHN", "wAShington", "jWas")
)


class SchoolIdTestCase(unittest.TestCase):
    def test_create_school_id_from_firstname_and_lastname(self):
        for firstname, lastname, expected_id in test_values:
            with self.subTest():
                self.assertEqual(create_id(firstname, lastname), expected_id)


if __name__ == '__main__':
    unittest.main()
