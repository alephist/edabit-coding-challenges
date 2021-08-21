import unittest

from typing import Tuple

from new_shade_of_blue import how_many_walls

test_values: Tuple[Tuple[int, int, int, int]] = (
    (100, 4, 5, 5),
    (10, 15, 12, 0),
    (41, 3, 6, 2),
    (50, 11, 5, 0),
    (1, 1, 1, 1)
)


class NewShadeOfBlueTestCase(unittest.TestCase):
    def test_calculate_how_many_walls_that_can_be_painted(self):
        for n, w, h, walls in test_values:
            with self.subTest():
                self.assertEqual(how_many_walls(n, w, h), walls)


if __name__ == '__main__':
    unittest.main()
