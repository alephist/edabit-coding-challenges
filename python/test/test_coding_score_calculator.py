import unittest

from typing import Tuple, Union

from coding_score_calculator import score_calculator

test_values: Tuple[Tuple[int, int, int, Union[int, str]]] = (
    (4, 2, 7, 180),
    (3, 12, 0, 135),
    (5, -5, 2, "invalid"),
    (20, 7, 3, 230),
    (0, 0, 0, 0),
    (1, 2, 3, 85),
    (6, -6, -6, "invalid")
)


class CodingScoreCalculatorTestCase(unittest.TestCase):
    def test_calculate_users_total_number_of_points(self):
        for easy, med, hard, expected_value in test_values:
            with self.subTest():
                self.assertEqual(score_calculator(
                    easy, med, hard), expected_value)


if __name__ == '__main__':
    unittest.main()
