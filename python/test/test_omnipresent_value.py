import unittest

from typing import List, Tuple

from omnipresent_value import is_omnipresent

test_value: Tuple[Tuple[List[List[int]], int, bool]] = (
    ([[1, 1], [1, 3], [5, 1], [6, 1]], 1, True),
    ([[1, 1], [1, 3], [5, 1], [6, 1]], 6, False),
    ([[5], [5], [5], [6, 5]], 5, True),
    ([[5], [5], [5], [6, 5]], 6, False),
    ([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1, True)
)


class OmnipresentValueTestCase(unittest.TestCase):
    def test_check_if_input_val_is_present_in_every_sublist_in_input_list(self):
        for lst, val, expected_value in test_value:
            with self.subTest():
                self.assertEqual(is_omnipresent(lst, val), expected_value)


if __name__ == '__main__':
    unittest.main()
