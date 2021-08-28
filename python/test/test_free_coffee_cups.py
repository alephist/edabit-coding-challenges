import unittest

from typing import Tuple

from free_coffee_cups import total_cups

test_values: Tuple[Tuple[int, int]] = (
    (6, 7),
    (3, 3),
    (7, 8),
    (12, 14),
    (213, 248),
    (16, 18)
)


class FreeCoffeeCupsTestCase(unittest.TestCase):
    def test_return_number_of_total_cups(self):
        for n, expected_total in test_values:
            with self.subTest():
                self.assertEqual(total_cups(n), expected_total)


if __name__ == '__main__':
    unittest.main()
