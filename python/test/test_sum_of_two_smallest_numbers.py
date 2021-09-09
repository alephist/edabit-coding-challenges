import unittest

from typing import List, Tuple

from sum_of_two_smallest_numbers import sum_two_smallest_nums

test_values: Tuple[Tuple[List[int], int]] = (
    ([19, 5, 42, 2, 77], 7),
    ([10, 343445353, 3453445, 3453545353453], 3453455),
    ([2, 9, 6, -1], 8),
    ([879, 953, 694, -847, 342, 221, -91, -723, 791, -587], 563),
    ([3683, 2902, 3951, -475, 1617, -2385], 4519),
    ([280, 134, 108], 242),
    ([280, 134, 108, 1], 109),
    ([321, 406, -176], 727),
    ([1, 1, 1, 1], 2),
    ([-1, -1, 1, 1], 2)
)


class SumOfTwoSmallestNumbersTestCase(unittest.TestCase):
    def test_return_sum_of_two_smallest_numbers_from_list(self):
        for lst, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(sum_two_smallest_nums(lst), expected_sum)


if __name__ == '__main__':
    unittest.main()
