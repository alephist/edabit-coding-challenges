import unittest

from typing import Tuple

from dictionary_given_key import Dictionary, has_key

test_values: Tuple[Tuple[Dictionary, str, bool]] = (
    ({"pot": 1, "tot": 2, "not": 3}, "not", True),
    ({"craves": True, "midnight": True, "snack": True}, "morning", False),
    ({"a": 44, "b": 45, "c": 46}, "d", False),
    ({"a": "z", "b": "y", "c": "x"}, "c", True)
)


class DictionaryGivenKeyTestCase(unittest.TestCase):
    def test_check_if_dictionary_has_given_key(self):
        for dictionary, key, expected in test_values:
            with self.subTest():
                self.assertEqual(has_key(dictionary, key), expected)


if __name__ == '__main__':
    unittest.main()
