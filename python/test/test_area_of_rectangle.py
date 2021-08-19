import unittest

from typing import Tuple

from area_of_rectangle import area

test_values: Tuple[Tuple[int, int, int]] = (
    (5, 3, 15),
    (8, 5, 40),
    (5, 4, 20),
    (2, 3, 6),
    (10000, 10000, 100000000),
    (-2, -5, -1),
    (0, 3, -1),
    (5, -3, -1),
    (0, 1, -1),
    (-1, 0, -1)
)


class AreaOfRectangleTestCase(unittest.TestCase):
    def test_get_area_of_rectangle(self):
        for h, w, expected_area in test_values:
            with self.subTest():
                self.assertEqual(area(h, w), expected_area)


if __name__ == '__main__':
    unittest.main()
