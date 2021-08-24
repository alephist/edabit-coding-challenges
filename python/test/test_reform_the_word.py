import unittest

from typing import Tuple

from reform_the_word import get_word

test_values: Tuple[Tuple[str, str, str]] = (
    ("maga", "zine", "Magazine"),
    ("reli", "able", "Reliable"),
    ("impl", "icit", "Implicit"),
    ("docu", "ment", "Document"),
    ("oppo", "site", "Opposite"),
    ("offi", "cial", "Official"),
    ("disa", "gree", "Disagree"),
    ("acci", "dent", "Accident"),
    ("omis", "sion", "Omission"),
    ("vigo", "rous", "Vigorous"),
    ("pred", "ator", "Predator"),
    ("prog", "ress", "Progress"),
    ("inva", "sion", "Invasion"),
    ("fare", "well", "Farewell"),
    ("majo", "rity", "Majority"),
    ("pers", "onal", "Personal"),
    ("sequ", "ence", "Sequence"),
    ("gove", "rnor", "Governor"),
    ("igno", "rant", "Ignorant"),
    ("fini", "shed", "Finished")
)


class ReformTheWordTestCase(unittest.TestCase):
    def test_return_new_word_from_combined_two_words(self):
        for left, right, expected_word in test_values:
            with self.subTest():
                self.assertEqual(get_word(left, right), expected_word)


if __name__ == '__main__':
    unittest.main()
