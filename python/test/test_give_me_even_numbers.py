import unittest

from typing import Tuple

from give_me_even_numbers import sum_even_nums_in_range

test_values: Tuple[Tuple[int, int, int]] = (
    (51, 150, 5050),
    (70, 100, 1360),
    (99, 110, 630),
    (63, 97, 1360),
    (10, 20, 90)
)


class GiveMeEvenNumbersTestCase(unittest.TestCase):
    def test_get_sum_of_even_numbers_in_range(self):
        for start, stop, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(sum_even_nums_in_range(
                    start, stop), expected_sum)


if __name__ == '__main__':
    unittest.main()
