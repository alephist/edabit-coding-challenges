import unittest

from typing import Tuple

from sort_numbers_ascending import NumList, sort_nums_ascending

test_values: Tuple[Tuple[NumList, NumList]] = (
    ([1, 2, 10, 50, 5], [1, 2, 5, 10, 50]),
    ([80, 29, 4, -95, -24, 85], [-95, -24, 4, 29, 80, 85]),
    ([], []),
    ([47, 51, -17, -16, 91, 47, -85, -8, -16, -27],
     [-85, -27, -17, -16, -16, -8, 47, 47, 51, 91]),
    ([-51, -73, 65, 69, -76, 74, -14], [-76, -73, -51, -14, 65, 69, 74]),
    ([45, 98, 35, 65, 97, 21, 33], [21, 33, 35, 45, 65, 97, 98]),
    ([-23, -69, -54, -2, -32], [-69, -54, -32, -23, -2]),
    ([-21, -9, -96], [-96, -21, -9]),
    ([0], [0])
)


class SortNumbersAscendingTestCase(unittest.TestCase):
    def test_sort_numbers_in_list_in_ascending_order(self):
        for lst, sorted_lst in test_values:
            with self.subTest():
                self.assertEqual(sort_nums_ascending(lst), sorted_lst)


if __name__ == '__main__':
    unittest.main()
