import unittest

from typing import Tuple

from online_shopping import OrderItem, free_shipping

test_values: Tuple[Tuple[OrderItem, bool]] = (
    ({'Shampoo': 5.99, 'Rubber Ducks': 15.99}, False),
    ({'Flatscreen TV': 399.99}, True),
    ({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99}, True),
    ({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00}, False),
    ({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33,
     'Spongebob Plushie': 20.00}, True)
)


class OnlineShoppingTestCase(unittest.TestCase):
    def test_check_if_order_is_eligible_for_free_shipping(self):
        for order, expected in test_values:
            with self.subTest():
                self.assertEqual(free_shipping(order), expected)


if __name__ == '__main__':
    unittest.main()
