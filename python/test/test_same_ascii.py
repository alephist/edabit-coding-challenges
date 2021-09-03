import unittest

from typing import Tuple

from same_ascii import same_ascii

test_values: Tuple[Tuple[str, str, bool]] = (
    ("a", "a", True),
    ("A", "a", False),
    ("!", "g", False),
    ("aAAAaaAA", "~~~aa,", True),
    ("aUGSIGHIhiSJGijs", "~~~~~~~~~FF,", False),
    ("~~Tga2", "{}[]()I", True),
)


class SameASCIITestCase(unittest.TestCase):
    def test_check_if_both_string_inputs_have_the_same_ascii_sum(self):
        for a, b, expected_value in test_values:
            with self.subTest():
                self.assertEqual(same_ascii(a, b), expected_value)


if __name__ == '__main__':
    unittest.main()
