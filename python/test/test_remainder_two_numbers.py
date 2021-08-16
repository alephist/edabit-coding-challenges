import unittest

from remainder_two_numbers import get_remainder

test_values = (
    (7, 2, 1),
    (3, 4, 3),
    (5, 5, 0),
    (1, 3, 1)
)


class RemainderTestCase(unittest.TestCase):
    def test_get_remainder_of_two_numbers(self):
        for x, y, expected in test_values:
            with self.subTest():
                self.assertEqual(get_remainder(x, y), expected)


if __name__ == '__main__':
    unittest.main()
