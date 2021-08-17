import unittest

from number_less_than_equal_zero import less_than_or_equal_to_zero

test_values = (
    (5, False),
    (0, True),
    (-5, True)
)


class NumberLessThanOrEqualZeroTestCase(unittest.TestCase):
    def test_check_if_num_is_less_than_or_equal_to_zero(self):
        for num, expected in test_values:
            with self.subTest():
                self.assertEqual(less_than_or_equal_to_zero(num), expected)


if __name__ == '__main__':
    unittest.main()
