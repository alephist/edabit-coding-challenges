import unittest

from typing import List, Tuple

from largest_even_number import largest_even

test_values: Tuple[Tuple[List[int], int]] = (
    ([3, 7, 2, 1, 7, 9, 10, 13], 10),
    ([1], -1),
    ([22], 22),
    ([13, 5, 7, 9], -1),
    ([3, 19, 18973623, 2], 2)
)


class LargestEvenNumberTestCase(unittest.TestCase):
    def test_return_largest_even_number_from_list(self):
        for lst, expectec_num in test_values:
            with self.subTest():
                self.assertEqual(largest_even(lst), expectec_num)


if __name__ == '__main__':
    unittest.main()
