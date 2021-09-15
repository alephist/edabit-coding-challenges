import unittest

from typing import List, Tuple

from accumulating_product import accumulating_product

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([1, 2, 3, 4], [1, 2, 6, 24]),
    ([5, 10, 1, 1], [5, 50, 50, 50]),
    ([1, 5, 7], [1, 5, 35]),
    ([1, 0, 1, 0], [1, 0, 0, 0]),
    ([1], [1]),
    ([1, 2, 2, 2, 2, 2, 2], [1, 2, 4, 8, 16, 32, 64]),
    ([1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1]),
    ([], [])
)


class AccumulatingProductTestCase(unittest.TestCase):
    def test_return_list_of_accumulating_product(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(accumulating_product(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
