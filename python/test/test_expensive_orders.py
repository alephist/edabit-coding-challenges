import unittest

from typing import Dict, Tuple

from expensive_orders import expensive_orders

test_values: Tuple[Tuple[Dict[str, int], int, Dict[str, int]]] = (
    ({"a": 3000, "b": 200, "c": 1050}, 1000, {"a": 3000, "c": 1050}),
    ({"Gucci Fur": 24600, "Teak Dining Table": 3200, "Louis Vutton Bag": 5550,
     "Dolce Gabana Heels": 4000}, 20000, {"Gucci Fur": 24600}),
    ({"Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5}, 40, {}),
    ({"Kyoto Ticket": 10, "Museum Exhibit": 30, "Kimono": 3000}, 5,
     {"Kyoto Ticket": 10, "Museum Exhibit": 30, "Kimono": 3000}),
)


class ExpensiveOrdersTestCase(unittest.TestCase):
    def test_return_orders_that_are_greater_than_the_cost(self):
        for orders, cost, expected_values in test_values:
            with self.subTest():
                self.assertEqual(expensive_orders(
                    orders, cost), expected_values)


if __name__ == '__main__':
    unittest.main()
