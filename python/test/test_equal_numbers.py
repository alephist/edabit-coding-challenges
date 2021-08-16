import unittest

from equal_numbers import is_same_num

test_values = (
    (4, 8, False),
    (2, 2, True),
    (0, 6, False),
    (2, "2", False),
)


class EqualNumbersTestCase(unittest.TestCase):
    def test_check_if_both_numbers_are_equal(self):
        for num_1, num_2, expected in test_values:
            with self.subTest():
                self.assertEqual(is_same_num(num_1, num_2), expected)


if __name__ == '__main__':
    unittest.main()
