import unittest

from typing import Any, List, Tuple

from filter_out_strings import filter_list

test_values: Tuple[Tuple[List[Any], List[int]]] = (
    ([1, 2, "a", "b"], [1, 2]),
    ([1, "a", "b", 0, 15], [1, 0, 15]),
    ([1, 2, "aasf", "1", "123", 123], [1, 2, 123]),
    (["jsyt", 4, "yt", "6"], [4]),
    (["r", 5, "y", "e", 8, 9], [5, 8, 9]),
    (["a", "e", "i", "o", "u"], []),
    ([4, "z", "f", 5], [4, 5]),
    (["abc", 123], [123]),
    (["$%^", 567, "&&&"], [567]),
    (["w", "r", "u", 43, "s", "a", 76, "d", 88], [43, 76, 88])
)


class FilterOutStringsTestCase(unittest.TestCase):
    def test_filter_out_strings_from_list(self):
        for lst, expected_list in test_values:
            with self.subTest():
                self.assertEqual(filter_list(lst), expected_list)


if __name__ == '__main__':
    unittest.main()
