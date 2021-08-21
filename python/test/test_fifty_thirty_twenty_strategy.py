import unittest

from typing import Dict, Tuple

from fifty_thirty_twenty_strategy import fifty_thirty_twenty

test_values: Tuple[Tuple[int, Dict[str, int]]] = (
    (10000, {"Needs": 5000, "Wants": 3000, "Savings": 2000}),
    (50000, {"Needs": 25000, "Wants": 15000, "Savings": 10000}),
    (13450, {"Needs": 6725, "Wants": 4035, "Savings": 2690}),
    (27800, {"Needs": 13900, "Wants": 8340, "Savings": 5560}),
    (19000, {"Needs": 9500, "Wants": 5700, "Savings": 3800}),
    (17610, {"Needs": 8805, "Wants": 5283, "Savings": 3522}),
    (25000, {"Needs": 12500, "Wants": 7500, "Savings": 5000}),
    (100000, {"Needs": 50000, "Wants": 30000, "Savings": 20000}),
    (347100, {"Needs": 173550, "Wants": 104130, "Savings": 69420})
)


class FiftyThirtyTwentyTestCase(unittest.TestCase):
    def test_return_dictionary_of_budget_summary(self):
        for ati, budget_summary in test_values:
            with self.subTest():
                self.assertEqual(fifty_thirty_twenty(ati), budget_summary)


if __name__ == '__main__':
    unittest.main()
