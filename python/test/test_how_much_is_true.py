import unittest

from typing import List, Tuple

from how_much_is_true import count_true

test_values: Tuple[Tuple[List[bool], int]] = (
    ([True, False, False, True, False], 2),
    ([False, False, False, False], 0),
    ([], 0),
    ([False, False, True, True, False, False, False, True,
     True, True, True, False, True, True, False], 8),
    ([True, False, True, True, False, False, False, False, False], 3),
    ([False, True, True, False, True, True, False, True,
     False, True, False, True, False, True, False], 8),
    ([True, False, True, True, True, False, True, True, False, False], 6),
    ([False, False, False, False, True, False, True, False, True, False, False], 3),
    ([True, False, False, False, True, False, False, True, False, False, False], 3),
    ([True, True, False, True, False, False, False, False, True, False], 4),
    ([True, False, True, True, False, True, True,
     True, True, False, True, False, True, False], 9),
    ([True, False, True, True, True, True, False, True,
     True, False, True, False, False, False, False], 8),
    ([True, True, False, False, False, False, True, False, True, True, False, True], 6)
)


class HowMuchIsTrueTestCase(unittest.TestCase):
    def test_get_number_of_true_value_in_list(self):
        for lst, expected_count in test_values:
            with self.subTest():
                self.assertEqual(count_true(lst), expected_count)


if __name__ == '__main__':
    unittest.main()
