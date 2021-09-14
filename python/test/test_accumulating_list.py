import unittest

from typing import List, Tuple

from accuulating_list import accumulating_list

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([1, 1, 1, 1, 1], [1, 2, 3, 4, 5]),
    ([1, 5, 7], [1, 6, 13]),
    ([1, 0, 1, 0, 1], [1, 1, 2, 2, 3]),
    ([1, 2, 3, 0, 0, 1], [1, 3, 6, 6, 6, 7]),
    ([], [])
)


class AccumulatingListTestCase(unittest.TestCase):
    def test_return_list_of_accumulating_sums(self):
        for lst, expected_list in test_values:
            with self.subTest():
                self.assertEqual(accumulating_list(lst), expected_list)


if __name__ == '__main__':
    unittest.main()
