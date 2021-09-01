import unittest

from typing import Dict, Tuple

from aging_the_population import after_n_years

test_values: Tuple[Tuple[Dict[str, int], int, Dict[str, int]]] = (
    ({
        "Joel": 32,
        "Fred": 44,
        "Reginald": 65,
        "Susan": 33,
        "Julian": 13
    }, 1, {
        "Joel": 33,
        "Fred": 45,
        "Reginald": 66,
        "Susan": 34,
        "Julian": 14
    }),
    ({
        "Baby": 2,
        "Child": 8,
        "Teenager": 15,
        "Adult": 25,
        "Elderly": 71
    }, 19, {
        "Baby": 21,
        "Child": 27,
        "Teenager": 34,
        "Adult": 44,
        "Elderly": 90
    }),
    ({
        "Genie": 1000,
        "Joe": 40
    }, 5, {
        "Genie": 1005,
        "Joe": 45
    }),
    ({
        "Adam": 0,
        "Eve": 0
    }, 800, {
        "Adam": 800,
        "Eve": 800
    }),
    ({
        "Ambitious Old Scientist": 87,
        "Ambitious Scientist": 42,
        "Slightly Concerned Young Scientist": 23
    }, -35, {
        "Ambitious Old Scientist": 122,
        "Ambitious Scientist": 77,
        "Slightly Concerned Young Scientist": 58
    }),
    ({
        "USA": 243,
        "Person": 27
    }, 0, {
        "USA": 243,
        "Person": 27
    })
)


class AgingThePopulationTestCase(unittest.TestCase):
    def test_return_age_of_people_after_n_years(self):
        for names, n, expected_value in test_values:
            with self.subTest():
                self.assertEqual(after_n_years(names, n), expected_value)


if __name__ == '__main__':
    unittest.main()
