import unittest

from typing import Tuple

from odd_or_even_string import odd_or_even

test_values: Tuple[Tuple[str, bool]] = (
    ("apples", True),
    ("banana", True),
    ("cherry", True),
    ("mango", False),
    ("peach", False),
    ("pears", False)
)


class OddOrEvenStringTestCase(unittest.TestCase):
    def test_return_true_if_string_length_is_even_false_if_odd(self):
        for word, expected in test_values:
            with self.subTest():
                self.assertEqual(odd_or_even(word), expected)


if __name__ == '__main__':
    unittest.main()
