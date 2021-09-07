import unittest

from typing import List, Tuple

from count_letters_in_word_search import letter_counter

test_values: Tuple[Tuple[List[List[str]], str, int]] = (
    ([
        ['D', 'E', 'Y', 'H', 'A', 'D'],
        ['C', 'B', 'Z', 'Y', 'J', 'K'],
        ['D', 'B', 'C', 'A', 'M', 'N'],
        ['F', 'G', 'G', 'R', 'S', 'R'],
        ['V', 'X', 'H', 'A', 'S', 'S']
    ], 'D', 3),
    ([
        ['D', 'E', 'Y', 'H', 'A', 'D'],
        ['C', 'B', 'Z', 'Y', 'J', 'K'],
        ['D', 'B', 'C', 'A', 'M', 'N'],
        ['F', 'G', 'G', 'R', 'S', 'R'],
        ['V', 'X', 'H', 'A', 'S', 'S']
    ], 'H', 2),
    ([
        ['D', 'E', 'Y', 'H', 'A', 'D'],
        ['C', 'B', 'Z', 'Y', 'J', 'K'],
        ['D', 'B', 'C', 'A', 'M', 'N'],
        ['F', 'G', 'G', 'R', 'S', 'R'],
        ['V', 'X', 'H', 'A', 'S', 'S']
    ], 'Z', 1),
    ([
        ['D', 'E', 'Y', 'H', 'A', 'D'],
        ['C', 'B', 'Z', 'Y', 'J', 'K'],
        ['D', 'B', 'C', 'A', 'M', 'N'],
        ['F', 'G', 'G', 'R', 'S', 'R'],
        ['V', 'X', 'H', 'A', 'S', 'S']
    ], 'R', 2),
    ([
        ['D', 'E', 'Y', 'H', 'A', 'D'],
        ['C', 'B', 'Z', 'Y', 'J', 'K'],
        ['D', 'B', 'C', 'A', 'M', 'N'],
        ['F', 'G', 'G', 'R', 'S', 'R'],
        ['V', 'X', 'H', 'A', 'S', 'S']
    ], 'X', 1),
    ([
        ['D', 'E', 'Y', 'H', 'A', 'D'],
        ['C', 'B', 'Z', 'Y', 'J', 'K'],
        ['D', 'B', 'C', 'A', 'M', 'N'],
        ['F', 'G', 'G', 'R', 'S', 'R'],
        ['V', 'X', 'H', 'A', 'S', 'S']
    ], 'S', 3)
)


class CountLettersInWordSearchTestCase(unittest.TestCase):
    def test_return_number_of_times_a_letter_show_up_in_search(self):
        for lst, letter, expected_count in test_values:
            with self.subTest():
                self.assertEqual(letter_counter(lst, letter), expected_count)


if __name__ == '__main__':
    unittest.main()
