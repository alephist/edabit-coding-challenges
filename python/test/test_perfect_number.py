import unittest

from typing import Tuple

from perfect_number import check_perfect

test_values: Tuple[Tuple[int, bool]] = (
    (6, True),
    (28, True),
    (496, True),
    (8128, True),
    (33550336, True),
    (12, False),
    (97, False),
    (481, False),
    (1001, False),
    (55555, False)
)


class PerfectNumberTestCase(unittest.TestCase):
    def test_check_if_number_is_equal_to_sum_of_its_factors(self):
        for num, expected_value in test_values:
            with self.subTest():
                self.assertEqual(check_perfect(num), expected_value)


if __name__ == '__main__':
    unittest.main()
