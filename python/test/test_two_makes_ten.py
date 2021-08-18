import unittest

from typing import Tuple

from two_makes_ten import makes_10

test_values: Tuple[Tuple[int, int, bool]] = (
    (9, 10, True),
    (9, 9, False),
    (1, 9, True	),
    (10, 1, True),
    (10, 10, True),
    (8, 2, True	),
    (8, 3, False),
    (10, 42, True),
    (12, -2, True)
)


class TwoMakesTenTestCase(unittest.TestCase):
    def test_check_if_one_of_the_inputs_is_10_or_the_sum_of_the_inputs_is_10(self):
        for a, b, expected in test_values:
            with self.subTest():
                self.assertEqual(makes_10(a, b), expected)


if __name__ == '__main__':
    unittest.main()
