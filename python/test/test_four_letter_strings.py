import unittest

from typing import List, Tuple

from four_letter_strings import is_four_letters

test_values: Tuple[Tuple[List[str], List[str]]] = (
    (["Ryan", "Kieran", "Jason", "Matt"], ["Ryan", "Matt"]),
    (["Tomato", "Potato", "Pair"], ["Pair"]),
    (["Kangaroo", "Bear", "Fox"], ["Bear"]),
    (["Red", "Blue", "Green", "Pink"], ["Blue", "Pink"]),
    (["is", "up", "two", "elephant"], []),
    ([], []),
    (["jazz", "quiz", "jump"], ["jazz", "quiz", "jump"]),
    ([""], []),
    (["Broccoli", "Carrot", "Spinach"], [])
)


class FourLetterStringsTestCase(unittest.TestCase):
    def test_return_list_of_words_that_have_four_characters(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(is_four_letters(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
