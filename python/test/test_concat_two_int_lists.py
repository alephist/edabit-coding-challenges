import unittest

from concat_two_int_lists import concat

test_values = (
    ([1, 3, 5], [2, 6, 8], [1, 3, 5, 2, 6, 8]),
    ([7, 8], [10, 9, 1, 1, 2], [7, 8, 10, 9, 1, 1, 2]),
    ([4, 5, 1], [3, 3, 3, 3, 3], [4, 5, 1, 3, 3, 3, 3, 3])
)


class ConcatTwoIntListTestCase(unittest.TestCase):
    def test_concatenate_two_integer_lists(self):
        for lst_1, lst_2, expected in test_values:
            with self.subTest():
                self.assertEqual(concat(lst_1, lst_2), expected)


if __name__ == '__main__':
    unittest.main()
