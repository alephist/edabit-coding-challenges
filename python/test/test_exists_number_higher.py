import unittest

from typing import List, Tuple

from exists_number_higher import exists_higher

test_values: Tuple[Tuple[List[int], int, bool]] = (
    ([5, 3, 15, 22, 4], 10, True),
    ([1, 2, 3, 4, 5], 8, False),
    ([4, 3, 3, 3, 2, 2, 2], 4, True),
    ([2, 2, 2, 2], 5, False),
    ([], 0, False)
)


class ExistsNumberHigherTestCase(unittest.TestCase):
    def test_check_if_there_is_at_least_one_number_higher_than_or_equal_to_n(self):
        for lst, n, expected_value in test_values:
            with self.subTest():
                self.assertEqual(exists_higher(lst, n), expected_value)


if __name__ == '__main__':
    unittest.main()
