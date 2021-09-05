import unittest

from typing import Tuple

from sum_people_budget import PersonList, get_budgets

test_values: Tuple[Tuple[PersonList, int]] = (
    ([{"name": "John",  "age": 21, "budget": 23000}, {"name": "Steve",  "age": 32,
     "budget": 40000}, {"name": "Martin",  "age": 16, "budget": 2700}], 65700),
    ([{"name": "John",  "age": 21, "budget": 29000}, {"name": "Steve",  "age": 32,
     "budget": 32000}, {"name": "Martin",  "age": 16, "budget": 1600}], 62600),
    ([{"name": "John",  "age": 21, "budget": 19401}, {"name": "Steve",  "age": 32,
     "budget": 12321}, {"name": "Martin",  "age": 16, "budget": 1204}], 32926),
    ([{"name": "John",  "age": 21, "budget": 10234}, {"name": "Steve",  "age": 32,
     "budget": 21754}, {"name": "Martin",  "age": 16, "budget": 4935}], 36923)
)


class SumPeopleBudgetTestCase(unittest.TestCase):
    def test_return_sum_of_peoples_budget(self):
        for lst, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(get_budgets(lst), expected_sum)


if __name__ == '__main__':
    unittest.main()
