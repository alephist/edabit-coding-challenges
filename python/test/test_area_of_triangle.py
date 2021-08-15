import unittest

from area_of_triangle import get_triangle_area

test_values = ((3, 2, 3), (5, 4, 10), (10, 10, 50), (0, 60, 0), (12, 11, 66))


class TriangleAreaTestCase(unittest.TestCase):
    def test_get_area_of_triangle(self):
        for base, height, expected in test_values:
            with self.subTest():
                self.assertEqual(get_triangle_area(base, height), expected)


if __name__ == '__main__':
    unittest.main()
