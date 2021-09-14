import unittest

from typing import Tuple

from sum_of_vowels import sum_of_vowels

test_values: Tuple[Tuple[str, int]] = (
    ('Let\'s test this function.', 8),
    ('Do I get the correct output?', 10),
    ('I love edabit!', 12),
    ('Will you still need me, will you still feed me when I\'m 64?', 26),
    ('The greatest glory in living lies not in never falling, but in rising every time we fall.', 52)
)


class SumOfVowelsTestCase(unittest.TestCase):
    def test_return_sum_of_vowels_in_a_sentence(self):
        for sentence, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(sum_of_vowels(sentence), expected_sum)


if __name__ == '__main__':
    unittest.main()
