import unittest

from typing import Tuple

from word_singular_or_plural import is_plural

test_values: Tuple[Tuple[str, bool]] = (
    ("dudes", True),
    ("flowers", True),
    ("checks", True),
    ("varies", True),
    ("efforts", True),
    ("mood", False),
    ("whiteboard", False),
    ("cow", False),
    ("word", False),
    ("love", False),
    ("silly", False)
)


class WordSingularOrPluralTestCase(unittest.TestCase):
    def test_check_if_given_word_is_plural(self):
        for word, expected in test_values:
            with self.subTest():
                self.assertEqual(is_plural(word), expected)


if __name__ == '__main__':
    unittest.main()
