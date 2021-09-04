import unittest

from typing import Tuple

from chocolate_dilemma import Chocolate, test_fairness

test_values: Tuple[Tuple[Chocolate, Chocolate, bool]] = (
    ([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]], False),
    ([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]], True),
    ([[1, 2], [2, 1]], [[2, 2]], True),
    ([[1, 2], [2, 1]], [[2, 2], [4, 4]], False),
    ([[2, 4], [1, 1], [11, 1]], [[2, 2], [4, 4]], True)
)


class ChocolateDilemmaTestCase(unittest.TestCase):
    def test_check_if_total_chocolate_are_is_the_same_for_two_sisters(self):
        for agatha, bertha, expected_value in test_values:
            with self.subTest():
                self.assertEqual(test_fairness(agatha, bertha), expected_value)


if __name__ == '__main__':
    unittest.main()
