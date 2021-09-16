import unittest

from typing import List, Tuple

from do_all_bigrams_exist import can_find

test_values: Tuple[Tuple[List[str], List[str], bool]] = (
    (["at", "be", "th", "au"], ["beautiful", "the", "hat"], True),
    (["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"], True),
    (["la", "te"], ["latte"], True),
    (["th", "fo", "ma", "or"], ["the", "many", "for", "forest"], True),
    (["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"], False),
    (["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"], False),
    (["la"], [], False),
    (["la", "at", "te", "ea"], ["latte"], False)
)


class DoAllBigramsExistTestCase(unittest.TestCase):
    def test_check_if_all_bigrams_can_be_found_at_least_once_in_list_of_words(self):
        for bigrams, words, expected_value in test_values:
            with self.subTest():
                self.assertEqual(can_find(bigrams, words), expected_value)


if __name__ == '__main__':
    unittest.main()
