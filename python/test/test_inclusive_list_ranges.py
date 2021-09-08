import unittest

from typing import List, Tuple

from inclusive_list_ranges import inclusive_list

test_values: Tuple[Tuple[int, int, List[int]]] = (
    (1, 5, [1, 2, 3, 4, 5]),
    (2, 8, [2, 3, 4, 5, 6, 7, 8]),
    (10, 20, [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    (17, 5, [17]),
    (40, 50, [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]),
    (1, 41, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]),
    (24, 17, [24]),
    (11, 66, [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
     38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]),
    (9, 3, [9]),
    (6, 16, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
)


class InclusiveListRangeTestCase(unittest.TestCase):
    def test_return_range_of_numbers_inclusive_of_start_and_end_numbers(self):
        for start_num, end_num, expected_list in test_values:
            with self.subTest():
                self.assertEqual(inclusive_list(
                    start_num, end_num), expected_list)


if __name__ == '__main__':
    unittest.main()
