import unittest

from typing import Dict, List, Tuple

from frequency_distribution import get_frequencies

test_values: Tuple[Tuple[List, Dict]] = (
    (['A', 'A'], {'A': 2}),
    (['A', 'B', 'A', 'A', 'A'], {'A': 4, 'B': 1}),
    (['A', 'B', 'C', 'A', 'A'], {'A': 3, 'B': 1, 'C': 1}),
    ([1, 2, 3, 3, 2], {1: 1, 2: 2, 3: 2}),
    ([True, False, True, False, False], {True: 2, False: 3}),
    ([], {})
)


class FrequencyDistributionTestCase(unittest.TestCase):
    def test_return_frequency_distribution_of_list(self):
        for lst, expected_dict in test_values:
            with self.subTest():
                self.assertEqual(get_frequencies(lst), expected_dict)


if __name__ == '__main__':
    unittest.main()
