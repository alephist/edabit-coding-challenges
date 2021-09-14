import unittest

from typing import Tuple

from sum_of_letters_even_or_odd import is_alpha_sum_even

test_values: Tuple[Tuple[str, bool]] = (
    ("i'am king", True),
    ("True", True),
    ("alexa", False)
)


class SumOfLettersEvenOrOddTestCase(unittest.TestCase):
    def test_check_if_sum_of_letters_is_even(self):
        for word, expected_value in test_values:
            with self.subTest():
                self.assertEqual(is_alpha_sum_even(word), expected_value)


if __name__ == '__main__':
    unittest.main()
