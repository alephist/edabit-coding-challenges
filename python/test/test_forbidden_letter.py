import unittest

from typing import List, Tuple

from forbidden_letter import forbidden_letter

test_values: Tuple[Tuple[str, List[str], bool]] = (
    ('e', ['rinse', 'and', 'repeat'], False),
    ('d', ['python', 'javascript', 'ruby', 'fortran'], True),
    ('a', ['spoon', 'fork', 'knife'], True),
    ('b', ['test', 'dot', 'assert', 'equals'], True),
    ('i', ['rock', 'paper', 'scissors'], False),
    ('t', [], True)
)


class ForbiddelLetterTestCase(unittest.TestCase):
    def test_letter_does_not_appear_in_any_of_the_words_in_list(self):
        for char, lst, expected in test_values:
            with self.subTest():
                self.assertEqual(forbidden_letter(char, lst), expected)


if __name__ == '__main__':
    unittest.main()
