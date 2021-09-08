import unittest

from typing import Tuple

from reverse_words_starting_with_particular_letter import special_reverse

test_values: Tuple[Tuple[str, str, str]] = (
    ('word searches are super fun', 's', 'word sehcraes are repus fun'),
    ('first man to walk on the moon', 'm', 'first nam to walk on the noom'),
    ('peter piper picked pickled peppers', 'p',
     'retep repip dekcip delkcip sreppep'),
    ('he went to climb mount everest', 'p', 'he went to climb mount everest')
)


class ReverseWordsStartingWithParticularLetterTestCase(unittest.TestCase):
    def test_reverse_all_words_in_a_sentence_that_starts_with_a_particular_letter(self):
        for s, c, expected_str in test_values:
            with self.subTest():
                self.assertEqual(special_reverse(s, c), expected_str)


if __name__ == '__main__':
    unittest.main()
