import unittest

from typing import Tuple

from is_string_empty import is_empty

test_values: Tuple[Tuple[str, bool]] = (
    ("", True),
    (" ", False),
    ("            ", False),
    ("38215", False),
    ("afjabsdf", False),
    ("!?@&", False)
)


class IsStringEmptyTestCase(unittest.TestCase):
    def test_check_if_input_string_is_empty(self):
        for s, expected in test_values:
            with self.subTest():
                self.assertEqual(is_empty(s), expected)


if __name__ == '__main__':
    unittest.main()
