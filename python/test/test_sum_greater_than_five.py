import unittest

from typing import List, Tuple

from sum_greater_than_five import Number, sum_five

test_values: Tuple[Tuple[List[Number], Number]] = (
    ([1, 5, 20, 30, 4, 9, 18], 77),
    ([1, 2, 3, 4], 0),
    ([10, 12, 28, 47, 55, 100], 252),
    ([25, 44, 6, 4, 3, 36], 111),
    ([5, 2, 150, 187, 254, 0], 591),
    ([1000, 2500, 2, 4, 500, 400], 4400),
    ([125.5, 147.2, 548.6, 2.3, 1.5], 821.3)
)


class SumGreaterThanFiveTestCase(unittest.TestCase):
    def test_get_sum_of_elements_that_are_greater_than_five(self):
        for lst, expected in test_values:
            with self.subTest():
                self.assertEqual(sum_five(lst), expected)


if __name__ == '__main__':
    unittest.main()
