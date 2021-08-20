import unittest

from typing import Any, Tuple

from all_values_true import all_truthy

test_values: Tuple[Tuple[Any]] = (
    (True, True, True, True),
    (False, True, 1, 2, 3, False),
    (0, 1, 2, 3, 4, 5, False),
    (1, 2, 7, 84, 357, True),
    ("Hi", "Hello", "This was translated from JS to python", True),
    ([], {}, "", False)
)


class AllValuesTrueTestCase(unittest.TestCase):
    def test_check_if_all_values_are_truthy(self):
        for item in test_values:
            with self.subTest():
                *args, expected = item
                self.assertEqual(all_truthy(*args), expected)


if __name__ == '__main__':
    unittest.main()
