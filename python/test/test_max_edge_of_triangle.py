import unittest

from max_edge_of_triangle import get_next_edge

test_values = ((5, 4, 8), (8, 3, 10), (7, 9, 15), (10, 4, 13), (7, 2, 8))


class MaximumEdgeOfTriangleTestCase(unittest.TestCase):
    def test_get_max_range_of_third_edge_of_a_triangle(self):
        for side_1, side_2, expected in test_values:
            with self.subTest():
                self.assertEqual(get_next_edge(side_1, side_2), expected)


if __name__ == '__main__':
    unittest.main()
