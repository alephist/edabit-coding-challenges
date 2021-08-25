import unittest

from typing import Tuple

from check_if_same_case import same_case

test_values: Tuple[Tuple[str, bool]] = (
    ("HELLO", True),
    ("HEllo", False),
    ("mArmALadE", False),
    ("marmalade", True),
    ("MARMALADE", True),
    ("ketchUP", False),
    ("pickle", True),
    ("MUSTARD", True)
)


class CheckIfSameCaseTestCase(unittest.TestCase):
    def test_check_if_string_contains_only_uppercase_or_lowercase_letters(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(same_case(txt), expected)


if __name__ == '__main__':
    unittest.main()
