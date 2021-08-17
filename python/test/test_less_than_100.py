import unittest

from less_than_100 import sum_is_less_than_100

test_values = (
    (5, 57, True),
    (77, 30, False),
    (0, 59, True),
    (78, 35, False),
    (63, 11, True),
    (37, 99, False),
    (52, 11, True),
    (82, 95, False),
    (17, 44, True),
    (74, 53, False),
    (3, 77, True),
    (25, 80, False),
    (59, 28, True),
    (69, 87, False),
    (10, 45, True),
    (43, 58, False),
    (50, 44, True),
    (74, 89, False),
    (3, 27, True),
    (21, 79, False)
)


class LessThan100TestCase(unittest.TestCase):
    def test_check_if_sum_of_two_numbers_is_less_than_100(self):
        for a, b, expected in test_values:
            with self.subTest():
                self.assertEqual(sum_is_less_than_100(a, b), expected)


if __name__ == '__main__':
    unittest.main()
