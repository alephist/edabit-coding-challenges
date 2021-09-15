import unittest

from typing import Tuple

from longest_word import longest_word

test_values: Tuple[Tuple[str, str]] = (
    ("Hello darkness my old friend.", "darkness"),
    ("Hello there mate.", "Hello"),
    ("Margaret's toy is a pretty doll.", "Margaret's"),
    ("A thing of beauty is a joy forever.", "forever."),
    ("Forgetfulness is by all means powerless!", "Forgetfulness"),
    ("The word 'strengths' is the longest and most commonly used word with a single vowel.", "'strengths'")
)


class LongestWordTestCase(unittest.TestCase):
    def test_return_the_longest_word_in_a_sentence(self):
        for sentence, expected_word in test_values:
            with self.subTest():
                self.assertEqual(longest_word(sentence), expected_word)


if __name__ == '__main__':
    unittest.main()
