import unittest

from typing import List, Tuple

from total_volume_of_boxes import Box, total_volume

test_values: Tuple[Tuple[List[Box], int]] = (
    ([[4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]], 63),
    ([[2, 2, 2], [2, 1, 1]], 10),
    ([[1, 1, 1]], 1),
    ([[5, 1, 10], [1, 9, 2]], 68),
    ([[1, 1, 5], [3, 3, 1]], 14)
)


class TotalVolumeOfBoxesTestCase(unittest.TestCase):
    def test_get_total_volume_of_each_boxes(self):
        for boxes, expected_volume in test_values:
            with self.subTest():
                self.assertEqual(total_volume(*boxes), expected_volume)


if __name__ == '__main__':
    unittest.main()
