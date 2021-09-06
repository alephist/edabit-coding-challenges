import unittest

from typing import Tuple

from scrabble_hand import TileList, maximum_score

test_values: Tuple[Tuple[TileList, int]] = (
    ([{"tile": "N", "score": 1}, {"tile": "K", "score": 5}, {"tile": "Z", "score": 10}, {"tile": "X",
     "score": 8}, {"tile": "D", "score": 2}, {"tile": "A", "score": 1}, {"tile": "E", "score": 1}], 28),
    ([{"tile": "B", "score": 2}, {"tile": "V", "score": 4}, {"tile": "F", "score": 4}, {"tile": "U",
     "score": 1}, {"tile": "D", "score": 2}, {"tile": "O", "score": 1}, {"tile": "U", "score": 1}], 15),
    ([{'tile': 'L', 'score': 1}, {'tile': 'F', 'score': 4}, {'tile': 'M', 'score': 3}, {'tile': 'L',
     'score': 1}, {'tile': 'T', 'score': 1}, {'tile': 'F', 'score': 4}, {'tile': 'M', 'score': 3}], 17),
    ([{'tile': 'U', 'score': 1}, {'tile': 'E', 'score': 1}, {'tile': 'S', 'score': 1}, {'tile': 'C',
     'score': 3}, {'tile': 'G', 'score': 2}, {'tile': 'U', 'score': 1}, {'tile': 'S', 'score': 1}], 10),
    ([{'tile': 'X', 'score': 8}, {'tile': 'I', 'score': 1}, {'tile': 'Q', 'score': 10}, {'tile': 'B',
     'score': 3}, {'tile': 'L', 'score': 1}, {'tile': 'A', 'score': 1}, {'tile': 'J', 'score': 8}], 32),
    ([{'tile': 'I', 'score': 1}, {'tile': 'R', 'score': 1}, {'tile': 'O', 'score': 1}, {'tile': 'A',
     'score': 1}, {'tile': 'S', 'score': 1}, {'tile': 'T', 'score': 1}, {'tile': 'C', 'score': 3}], 9),
    ([{'tile': 'E', 'score': 1}, {'tile': 'Z', 'score': 10}, {'tile': 'K', 'score': 5}, {'tile': 'G',
     'score': 2}, {'tile': 'O', 'score': 1}, {'tile': 'E', 'score': 1}, {'tile': 'G', 'score': 2}], 22),
    ([{'tile': 'Q', 'score': 10}, {'tile': 'N', 'score': 1}, {'tile': 'G', 'score': 2}, {'tile': 'W',
     'score': 4}, {'tile': 'T', 'score': 1}, {'tile': 'P', 'score': 3}, {'tile': 'E', 'score': 1}], 22),
    ([{'tile': 'N', 'score': 1}, {'tile': 'I', 'score': 1}, {'tile': 'S', 'score': 1}, {'tile': 'O',
     'score': 1}, {'tile': 'M', 'score': 3}, {'tile': 'C', 'score': 3}, {'tile': 'C', 'score': 3}], 13),
    ([{'tile': 'D', 'score': 2}, {'tile': 'O', 'score': 1}, {'tile': 'E', 'score': 1}, {'tile': 'K',
     'score': 5}, {'tile': 'A', 'score': 1}, {'tile': 'L', 'score': 1}, {'tile': 'H', 'score': 4}], 15),
    ([{'tile': 'Y', 'score': 4}, {'tile': 'V', 'score': 4}, {'tile': 'D', 'score': 2}, {'tile': 'I',
     'score': 1}, {'tile': 'A', 'score': 1}, {'tile': 'L', 'score': 1}, {'tile': 'Y', 'score': 4}], 17),
    ([{'tile': 'T', 'score': 1}, {'tile': 'S', 'score': 1}, {'tile': 'Y', 'score': 4}, {'tile': 'N',
     'score': 1}, {'tile': 'X', 'score': 8}, {'tile': 'I', 'score': 1}, {'tile': 'R', 'score': 1}], 17),
    ([{'tile': 'E', 'score': 1}, {'tile': 'I', 'score': 1}, {'tile': 'Q', 'score': 10}, {'tile': 'D',
     'score': 2}, {'tile': 'C', 'score': 3}, {'tile': 'Q', 'score': 10}, {'tile': 'C', 'score': 3}], 30),
    ([{'tile': 'J', 'score': 8}, {'tile': 'L', 'score': 1}, {'tile': 'Q', 'score': 10}, {'tile': 'L',
     'score': 1}, {'tile': 'H', 'score': 4}, {'tile': 'X', 'score': 8}, {'tile': 'O', 'score': 1}], 33),
    ([{'tile': 'A', 'score': 1}, {'tile': 'C', 'score': 3}, {'tile': 'A', 'score': 1}, {'tile': 'Q',
     'score': 10}, {'tile': 'K', 'score': 5}, {'tile': 'Y', 'score': 4}, {'tile': 'V', 'score': 4}], 28),
    ([{'tile': 'T', 'score': 1}, {'tile': 'M', 'score': 3}, {'tile': 'B', 'score': 3}, {'tile': 'M',
     'score': 3}, {'tile': 'T', 'score': 1}, {'tile': 'G', 'score': 2}, {'tile': 'X', 'score': 8}], 21),
    ([{'tile': 'D', 'score': 2}, {'tile': 'I', 'score': 1}, {'tile': 'G', 'score': 2}, {'tile': 'X',
     'score': 8}, {'tile': 'L', 'score': 1}, {'tile': 'L', 'score': 1}, {'tile': 'D', 'score': 2}], 17),
    ([{'tile': 'B', 'score': 3}, {'tile': 'C', 'score': 3}, {'tile': 'K', 'score': 5}, {'tile': 'X',
     'score': 8}, {'tile': 'W', 'score': 4}, {'tile': 'Q', 'score': 10}, {'tile': 'G', 'score': 2}], 35),
    ([{'tile': 'C', 'score': 3}, {'tile': 'X', 'score': 8}, {'tile': 'H', 'score': 4}, {'tile': 'K',
     'score': 5}, {'tile': 'U', 'score': 1}, {'tile': 'N', 'score': 1}, {'tile': 'Y', 'score': 4}], 26),
    ([{'tile': 'A', 'score': 1}, {'tile': 'T', 'score': 1}, {'tile': 'V', 'score': 4}, {'tile': 'X',
     'score': 8}, {'tile': 'H', 'score': 4}, {'tile': 'T', 'score': 1}, {'tile': 'U', 'score': 1}], 20),
    ([{'tile': 'I', 'score': 1}, {'tile': 'X', 'score': 8}, {'tile': 'N', 'score': 1}, {'tile': 'G',
     'score': 2}, {'tile': 'D', 'score': 2}, {'tile': 'B', 'score': 3}, {'tile': 'Y', 'score': 4}], 21),
    ([{'tile': 'R', 'score': 1}, {'tile': 'N', 'score': 1}, {'tile': 'U', 'score': 1}, {'tile': 'F',
     'score': 4}, {'tile': 'E', 'score': 1}, {'tile': 'T', 'score': 1}, {'tile': 'S', 'score': 1}], 10),
    ([{'tile': 'L', 'score': 1}, {'tile': 'J', 'score': 8}, {'tile': 'H', 'score': 4}, {'tile': 'E',
     'score': 1}, {'tile': 'D', 'score': 2}, {'tile': 'W', 'score': 4}, {'tile': 'L', 'score': 1}], 21),
    ([{'tile': 'N', 'score': 1}, {'tile': 'I', 'score': 1}, {'tile': 'L', 'score': 1}, {'tile': 'H',
     'score': 4}, {'tile': 'Y', 'score': 4}, {'tile': 'D', 'score': 2}, {'tile': 'P', 'score': 3}], 16),
    ([{'tile': 'P', 'score': 3}, {'tile': 'R', 'score': 1}, {'tile': 'U', 'score': 1}, {'tile': 'N',
     'score': 1}, {'tile': 'E', 'score': 1}, {'tile': 'K', 'score': 5}, {'tile': 'F', 'score': 4}], 16),
    ([{'tile': 'T', 'score': 1}, {'tile': 'A', 'score': 1}, {'tile': 'I', 'score': 1}, {'tile': 'U',
     'score': 1}, {'tile': 'C', 'score': 3}, {'tile': 'P', 'score': 3}, {'tile': 'W', 'score': 4}], 14),
    ([{'tile': 'V', 'score': 4}, {'tile': 'A', 'score': 1}, {'tile': 'F', 'score': 4}, {'tile': 'I',
     'score': 1}, {'tile': 'T', 'score': 1}, {'tile': 'E', 'score': 1}, {'tile': 'T', 'score': 1}], 13),
    ([{'tile': 'Q', 'score': 10}, {'tile': 'U', 'score': 1}, {'tile': 'R', 'score': 1}, {'tile': 'I',
     'score': 1}, {'tile': 'P', 'score': 3}, {'tile': 'R', 'score': 1}, {'tile': 'R', 'score': 1}], 18),
    ([{'tile': 'E', 'score': 1}, {'tile': 'X', 'score': 8}, {'tile': 'Z', 'score': 10}, {'tile': 'D',
     'score': 2}, {'tile': 'L', 'score': 1}, {'tile': 'W', 'score': 4}, {'tile': 'Z', 'score': 10}], 36),
    ([{'tile': 'R', 'score': 1}, {'tile': 'M', 'score': 3}, {'tile': 'Q', 'score': 10}, {'tile': 'O',
     'score': 1}, {'tile': 'M', 'score': 3}, {'tile': 'Y', 'score': 4}, {'tile': 'N', 'score': 1}], 23),
    ([{'tile': 'H', 'score': 4}, {'tile': 'J', 'score': 8}, {'tile': 'A', 'score': 1}, {'tile': 'J',
     'score': 8}, {'tile': 'V', 'score': 4}, {'tile': 'Z', 'score': 10}, {'tile': 'X', 'score': 8}], 43),
    ([{'tile': 'W', 'score': 4}, {'tile': 'X', 'score': 8}, {'tile': 'B', 'score': 3}, {'tile': 'A',
     'score': 1}, {'tile': 'E', 'score': 1}, {'tile': 'D', 'score': 2}, {'tile': 'S', 'score': 1}], 20)
)


class ScrabbleHandTestCase(unittest.TestCase):
    def test_get_total_points_of_all_tiles_in_list(self):
        for tile_hand, expected_score in test_values:
            with self.subTest():
                self.assertEqual(maximum_score(tile_hand), expected_score)


if __name__ == '__main__':
    unittest.main()
