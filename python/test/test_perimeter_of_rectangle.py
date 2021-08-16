import unittest

from perimeter_of_rectangle import find_perimeter

test_values = (
    (6, 7, 26),
    (20, 10, 60),
    (2, 9, 22)
)


class RectanglePerimeterTestCase(unittest.TestCase):
    def test_get_perimeter_of_rectangle(self):
        for length, width, expected in test_values:
            with self.subTest():
                self.assertEqual(find_perimeter(length, width), expected)


if __name__ == '__main__':
    unittest.main()
