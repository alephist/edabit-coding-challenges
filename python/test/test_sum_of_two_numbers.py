import unittest

from sum_of_two_numbers import addition

test_values = ((2, 3, 5), (-3, -6, -9), (7, 3, 10))


class AdditionTestCase(unittest.TestCase):
    def test_add_two_numbers(self):
        for a, b, expected in test_values:
            with self.subTest():
                self.assertEqual(addition(a, b), expected)


if __name__ == '__main__':
    unittest.main()
