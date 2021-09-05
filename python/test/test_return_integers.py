import unittest

from typing import Any, List, Tuple

from return_integers import return_only_integers

test_values: Tuple[Tuple[List[Any], List[int]]] = (
    ([9, 2, "space", "car", "lion", 16], [9, 2, 16]),
    (["hello", 81, "basketball", 123, "fox"], [81, 123]),
    ([10, "121", 56, 20, "car", 3, "lion"], [10, 56, 20, 3]),
    (["String", True, 3.3, 1], [1])
)


class ReturnIntegersTestCase(unittest.TestCase):
    def test_return_list_of_integers_from_input_list(self):
        for lst, expected_list in test_values:
            with self.subTest():
                self.assertEqual(return_only_integers(lst), expected_list)


if __name__ == '__main__':
    unittest.main()
