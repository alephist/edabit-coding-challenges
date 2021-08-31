import unittest

from typing import List, Tuple

from filter_by_digit_length import filter_digit_length

test_values: Tuple[Tuple[List[int], int, List[int]]] = (
    ([88, 232, 4, 9721, 555], 3, [232, 555]),
    ([2, 7, 8, 9, 1012], 1, [2, 7, 8, 9]),
    ([32, 88, 74, 91, 300, 4050], 1, []),
    ([5, 6, 8, 9], 1, [5, 6, 8, 9]),
    ([99, 838, 435, 7666, 989, 431], 3, [838, 435, 989, 431]),
    ([99, 838, 435, 7666, 989, 431], 2, [99])
)


class FilterByDigitLength(unittest.TestCase):
    def test_return_list_of_numbers_that_have_certain_number_of_digits(self):
        for lst, num, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(filter_digit_length(lst, num), expected_lst)


if __name__ == '__main__':
    unittest.main()
