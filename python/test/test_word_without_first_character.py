import unittest

from typing import Tuple

from word_without_first_character import new_word

test_values: Tuple[Tuple[str, str]] = (
    ("pokhara", "okhara"),
    ("biratnagar", "iratnagar"),
    ("nepal", "epal"),
    ("damak", "amak"),
    ("itahari", "tahari"),
    ("rasuwa", "asuwa"),
    ("rolpa", "olpa")
)


class WordWithoutFirstCharacterTestCase(unittest.TestCase):
    def test_return_input_word_without_first_letter(self):
        for word, expected in test_values:
            with self.subTest():
                self.assertEqual(new_word(word), expected)


if __name__ == '__main__':
    unittest.main()
