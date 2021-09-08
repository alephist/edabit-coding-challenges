import unittest

from typing import Tuple

from circle_oop import Circle, Number

test_values: Tuple[Tuple[Number, Number, Number]] = (
    (20, 1257, 126),
    (2, 13, 13),
    (4.4, 61, 28)
)


class CircleOOPTestCase(unittest.TestCase):
    def test_get_area_and_perimeter_of_circle_from_input_radius(self):
        for radius, expected_area, expected_perimeter in test_values:
            with self.subTest():
                circle = Circle(radius)
                self.assertEqual(round(circle.get_area()), expected_area)
                self.assertEqual(round(circle.get_perimeter()),
                                 expected_perimeter)


if __name__ == '__main__':
    unittest.main()
