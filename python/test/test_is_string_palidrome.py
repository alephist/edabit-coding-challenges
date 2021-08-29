import unittest

from typing import Tuple

from is_string_palindrome import is_palindrome

test_values: Tuple[Tuple[str, bool]] = (
    ('mom', True),
    ('scary', False),
    ('reviver', True),
    ('stressed', False),
    ('good', False),
    ('refer', True),
    ('something', False),
    ('redder', True),
    ('civic', True)
)


class IsStringPalindromeTestCase(unittest.TestCase):
    def test_check_if_string_is_a_palindrome(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(is_palindrome(txt), expected)


if __name__ == '__main__':
    unittest.main()
