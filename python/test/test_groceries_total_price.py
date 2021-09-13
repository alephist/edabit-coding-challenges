import unittest

from typing import Tuple

from groceries_total_price import GroceryList, Number, get_total_price

test_values: Tuple[Tuple[GroceryList, Number]] = (
    ([
        {"product": "Milk", "quantity": 1, "price": 1.50}
    ], 1.5),
    ([
        {"product": "Milk", "quantity": 1, "price": 1.50},
        {"product": "Cereals", "quantity": 1, "price": 2.50}
    ], 4),
    ([
        {"product": "Milk", "quantity": 3, "price": 1.50}
    ], 4.5),
    ([
        {"product": "Milk", "quantity": 1, "price": 1.50},
        {"product": "Eggs", "quantity": 12, "price": 0.10},
        {"product": "Bread", "quantity": 2, "price": 1.60},
        {"product": "Cheese", "quantity": 1, "price": 4.50}
    ], 10.4),
    ([
        {"product": "Chocolate", "quantity": 1, "price": 0.10},
        {"product": "Lollipop", "quantity": 1, "price": 0.20}
    ], 0.3)
)


class GroceriesTotalPriceTestCase(unittest.TestCase):
    def test_return_total_price_of_groceries(self):
        for groceries, expected_total in test_values:
            with self.subTest():
                self.assertEqual(get_total_price(groceries), expected_total)


if __name__ == '__main__':
    unittest.main()
