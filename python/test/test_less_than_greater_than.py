import unittest

from typing import List, Tuple

from less_than_greater_than import list_between

test_values: Tuple[Tuple[int, int, List[int], List[int]]] = (
    (7, 32, [1, 2, 3, 78], []),
    (0, 9, [1, 2, 3, 78], [1, 2, 3]),
    (-5, 3, [-8, 0, 0, 20, -3], [0, 0, -3]),
    (1, 1, [1, 0, 3, 7], []),
    (0, 310, [1, -2, 300, 78765, 100, 99, 98, 234], [1, 300, 100, 99, 98, 234])
)


class LessThanGreaterThanTestCase(unittest.TestCase):
    def test_return_all_numbers_in_lst_greater_than_num1_and_less_than_num2(self):
        for num_1, num_2, lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(list_between(num_1, num_2, lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
