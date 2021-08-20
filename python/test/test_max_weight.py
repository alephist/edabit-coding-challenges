import unittest

from typing import List, Tuple

from max_weight import weight_allowed

test_values: Tuple[Tuple[int, List[int], int, bool]] = (
    (3000, [150, 201, 75, 88, 195], 1700, True),
    (3200, [220, 101, 115, 228, 15], 1700, False),
    (2900, [225, 171, 300, 274, 191], 1850, True),
    (3550, [180, 201, 140, 99, 204], 1980, False),
    (4500, [157, 154, 75, 88, 190], 2400, True),
    (4000, [150, 200, 79, 80, 159], 2000, False)
)


class MaximumWeightTestCase(unittest.TestCase):
    def test_combined_weight_of_car_and_passengers_are_less_than_max_weight(self):
        for car, p, max_weight, expected in test_values:
            with self.subTest():
                self.assertEqual(weight_allowed(car, p, max_weight), expected)


if __name__ == '__main__':
    unittest.main()
