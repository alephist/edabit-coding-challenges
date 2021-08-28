import unittest

from typing import List, Tuple

from array_word_lengths import word_lengths

test_values: Tuple[Tuple[List[str], List[int]]] = (
    (["hello", "world"], [5, 5]),
    (["Halloween", "Thanksgiving", "Christmas"], [9, 12, 9]),
    (["She", "sells", "seashells", "down", "by",
     "the", "seashore"], [3, 5, 9, 4, 2, 3, 8]),
    (["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"], [7, 5, 3, 3, 6, 2, 4]),
    (["Programming", "is", "fun"], [11, 2, 3])
)


class ArrayWordLengthsTestCase(unittest.TestCase):
    def test_return_array_of_word_lengths(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(word_lengths(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
