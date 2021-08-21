import unittest

from typing import Tuple

from last_character_n import is_last_character_n

test_values: Tuple[Tuple[str, bool]] = (
    ("Aiden", True),
    ("Roxy", False),
    ("Bert", False),
    ("Dean", True),
    ("Ian", True),
    ("Brian", True),
    ("Daniel", False)
)


class LastCharacterNTestCase(unittest.TestCase):
    def test_check_if_last_character_in_word_is_n(self):
        for word, expected in test_values:
            with self.subTest():
                self.assertEqual(is_last_character_n(word), expected)


if __name__ == '__main__':
    unittest.main()
