import unittest

from typing import Dict, Tuple

from count_letters_and_digits import count_all

test_values: Tuple[Tuple[str, Dict[str, int]]] = (
    ("Hello", {"LETTERS": 5, "DIGITS": 0}),
    ("137", {"LETTERS": 0, "DIGITS": 3}),
    ("H3LL0", {"LETTERS": 3, "DIGITS": 2}),
    ("149990", {"LETTERS": 0, "DIGITS": 6}),
    ("edabit 2018", {"LETTERS": 6, "DIGITS": 4}),
    ("    ", {"LETTERS": 0, "DIGITS": 0})
)


class CountLettersAndDigitsTestCase(unittest.TestCase):
    def test_return_count_of_letters_and_numbers_in_a_dictionary(self):
        for txt, expected_dict in test_values:
            with self.subTest():
                self.assertEqual(count_all(txt), expected_dict)


if __name__ == '__main__':
    unittest.main()
