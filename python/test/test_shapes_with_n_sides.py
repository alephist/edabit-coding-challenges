import unittest

from typing import Tuple

from shapes_with_n_sides import n_sided_shape

test_values: Tuple[Tuple[int, str]] = (
    (1, "circle"),
    (2, "semi-circle"),
    (3, "triangle"),
    (4, "square"),
    (5, "pentagon"),
    (6, "hexagon"),
    (7, "heptagon"),
    (8, "octagon"),
    (9, "nonagon"),
    (10, "decagon")
)


class ShapesWithnSidesTestCase(unittest.TestCase):
    def test_return_shape_based_on_n_number_of_sides(self):
        for n, expected_shape in test_values:
            with self.subTest():
                self.assertEqual(n_sided_shape(n), expected_shape)


if __name__ == '__main__':
    unittest.main()
