import unittest

from typing import List, Tuple, Union

from nth_smallest_integer import nth_smallest

test_values: Tuple[Tuple[List[int], int, Union[int, None]]] = (
    ([1, 3, 5, 7], 1, 1),
    ([1, 3, 5, 7], 3, 5),
    ([1, 3, 5, 7], 5, None),
    ([7, 3, 5, 1], 2, 3),
    ([5, 4, 3, 2, 1, -3], 1, -3),
    ([5, 4, 3, 2, 1, -3], 5, 4),
    ([4, 5], 3, None),
    ([4, 5], 2, 5),
    ([4, 5], 1, 4)
)


class NthSmallestIntegerTestCase(unittest.TestCase):
    def test_return_the_nth_smallest_integer(self):
        for lst, n, expected_value in test_values:
            with self.subTest():
                self.assertEqual(nth_smallest(lst, n), expected_value)


if __name__ == '__main__':
    unittest.main()
