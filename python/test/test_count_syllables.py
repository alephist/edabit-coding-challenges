import unittest

from typing import Tuple

from count_syllables import number_syllables

test_values: Tuple[Tuple[str, int]] = (
    ("buf-fet", 2),
    ("beau-ti-ful", 3),
    ("mon-u-men-tal", 4),
    ("on-o-mat-o-poe-ia", 6),
    ("o-ver-ly", 3),
    ("pas-try", 2),
    ("flu-id", 2),
    ("syl-la-ble", 3)
)


class CountSyllablesTestCase(unittest.TestCase):
    def test_get_number_of_syllables_of_input_word(self):
        for word, syllable_count in test_values:
            with self.subTest():
                self.assertEqual(number_syllables(word), syllable_count)


if __name__ == '__main__':
    unittest.main()
