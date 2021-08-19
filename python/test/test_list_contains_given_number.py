import unittest

from typing import List, Tuple

from list_contains_given_number import check

test_values: Tuple[Tuple[List[int], int, bool]] = (
    ([1, 2, 3, 4, 5], 3, True),
    ([1, 1, 2, 1, 1], 3, False),
    ([1, 1, 2, 1, 5, 4, 7], 7, True),
    ([1, 1, 2, 1, 5, 4, 7], 8, False),
    ([5, 5, 5, 6], 5, True),
    ([], 5, False)
)


class ListContainsGivenNumberTestCase(unittest.TestCase):
    def test_check_if_list_contains_a_given_number(self):
        for lst, el, expected in test_values:
            with self.subTest():
                self.assertEqual(check(lst, el), expected)


if __name__ == '__main__':
    unittest.main()
