import unittest

from typing import Tuple

from card_counting import Deck, card_count

test_values: Tuple[Tuple[Deck, int]] = (
    ([5, 9, 10, 3, 'J', 'A', 4, 8, 5], 1),
    (['A', 'A', 'K', 'Q', 'Q', 'J'], -6),
    (['A', 5, 5, 2, 6, 2, 3, 8, 9, 7], 5),
    ([2, 2, 2, 2, 2, 2, 2, 2], 8),
    ([], 0),
    (['A', 'A', 'A', 'A', 'A', 'A', 'A'], -7),
    (['A', 'K', 'Q', 'J', 10, 9, 8, 7, 6, 5, 4, 3, 2], 0)
)


class CardCountingTestCase(unittest.TestCase):
    def test_return_total_count_from_deck_of_cards_provided(self):
        for deck, expected_count in test_values:
            with self.subTest():
                self.assertEqual(card_count(deck), expected_count)


if __name__ == '__main__':
    unittest.main()
