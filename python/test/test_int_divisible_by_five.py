import unittest

from int_divisible_by_five import is_divisible_by_five

test_values = (
    (7, False),
    (5, True),
    (15, True),
    (33, False),
    (-18, False),
    (999, False),
    (2, False)
)


class DivisibleByFiveTestCase(unittest.TestCase):
    def test_check_if_num_is_divisible_by_five(self):
        for num, expected in test_values:
            with self.subTest():
                self.assertEqual(is_divisible_by_five(num), expected)


if __name__ == '__main__':
    unittest.main()
