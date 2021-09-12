import unittest

from typing import List, Tuple

from match_the_last_item import match_last_item

test_values: Tuple[Tuple[List, bool]] = (
    (['rsq', '6hi', 'g', 'rsq6hig'], True),
    ([0, 1, 2, 3, 4, 5, '12345'], False),
    (['for', 'mi', 'da', 'bel', 'formidable'], False),
    ([8, 'thunder', True, '8thunderTrue'], True),
    ([1, 1, 1, '11'], False),
    (['tocto', 'G8G', 'xtohkgc', '3V8', 'ctyghrs', 100.88,
     'fyuo', 'Q', 'toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ'], True)
)


class MatchTheLastItemTestCase(unittest.TestCase):
    def test_check_if_last_item_matches_rest_of_the_list_concatenated_together(self):
        for lst, expected_value in test_values:
            with self.subTest():
                self.assertEqual(match_last_item(lst), expected_value)


if __name__ == '__main__':
    unittest.main()
