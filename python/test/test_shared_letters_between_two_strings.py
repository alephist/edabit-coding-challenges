import unittest

from typing import Tuple

from shared_letters_between_two_strings import shared_letters

test_values: Tuple[Tuple[str, str, str]] = (
    ('house', 'home', 'eho'),
    ('Micky', 'mouse', 'm'),
    ('house', 'villa', ''),
    ('Aa', 'aA', 'a'),
    ('https://www.example.com', 'https://www.canada.ca', './:achpstw'),
    ('Edabit', 'Matt', 'at'),
    ('Javascript', 'Swift', 'ist'),
    ('Functional programming', 'Object oriented programming', ' acgimnoprt')
)


class SharedLettersBetweenTwoStringsTestCase(unittest.TestCase):
    def test_return_letters_shared_between_two_strings_as_a_string(self):
        for a, b, expected_str in test_values:
            with self.subTest():
                self.assertEqual(shared_letters(a, b), expected_str)


if __name__ == '__main__':
    unittest.main()
