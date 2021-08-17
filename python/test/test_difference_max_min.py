import unittest

from difference_max_min import difference_max_min

test_values = (
    ([10, 4, 1, 2, 8, 91], 90),
    ([-70, 43, 34, 54, 22], 124)
)


class DifferenceMaxMinTestCase(unittest.TestCase):
    def test_get_difference_of_max_and_min_numbers_from_list(self):
        for lst, expected in test_values:
            with self.subTest():
                self.assertEqual(difference_max_min(lst), expected)


if __name__ == '__main__':
    unittest.main()
