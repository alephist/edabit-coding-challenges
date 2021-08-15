import unittest

from next_number import get_next_number

test_values = ((2, 3), (-9, -8), (0, 1), (999, 1000), (74, 75))


class NextNumberTestCase(unittest.TestCase):
    def test_increment_input_num_by_one(self):
        for num, expected in test_values:
            with self.subTest():
                self.assertEqual(get_next_number(num), expected)


if __name__ == '__main__':
    unittest.main()
