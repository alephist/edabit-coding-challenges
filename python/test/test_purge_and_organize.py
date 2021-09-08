import unittest

from typing import Tuple

from purge_and_organize import NumberList, unique_sort

test_values: Tuple[Tuple[NumberList, NumberList]] = (
    ([1, 5, 8, 2, 3, 4, 4, 4, 10], [1, 2, 3, 4, 5, 8, 10]),
    ([1, 2, 5, 4, 7, 7, 7], [1, 2, 4, 5, 7]),
    ([7, 6, 5, 4, 3, 2, 1, 0, 1], [0, 1, 2, 3, 4, 5, 6, 7]),
    ([3, 6, 5, 4, 3, 27, 1, 100, 1], [1, 3, 4, 5, 6, 27, 100]),
    ([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415],
     [-87, -9, -4.323827, -3.1415, -3.1414, 8])
)


class PurgeAndOrganizeTestCase(unittest.TestCase):
    def test_list_of_unique_sorted_numbers(self):
        for lst, expected_list in test_values:
            with self.subTest():
                self.assertEqual(unique_sort(lst), expected_list)


if __name__ == '__main__':
    unittest.main()
