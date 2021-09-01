import unittest

from typing import Tuple

from between_words import is_between

test_values: Tuple[Tuple[str, str, str, bool]] = (
    ("apple", "banana", "azure", True),
    ("bookcase", "zebra", "squid", True),
    ("shrapnel", "tapenade", "tally", True),
    ("monk", "monument", "monkey", True),
    ("oath", "ostrich", "osteoporosis", True),
    ("ostracize", "ostrich", "open", False),
    ("bookend", "boolean", "boost", False),
    ("tamer", "tanner", "timid", False),
    ("rhino", "sorcerer", "quote", False),
    ("body", "lung", "ace", False)
)


class BetweenWordsTestCase(unittest.TestCase):
    def test_check_if_word_is_found_between_first_and_last_words(self):
        for first, last, word, expected_value in test_values:
            with self.subTest():
                self.assertEqual(is_between(first, last, word), expected_value)


if __name__ == '__main__':
    unittest.main()
