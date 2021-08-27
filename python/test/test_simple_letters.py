import unittest

from typing import Tuple

from simple_letters import longest_string

test_values: Tuple[Tuple[str, str, str]] = (
    ("mubashir", "edabit", "abdehimrstu"),
    ("pakistan", "airforce", "acefiknoprst"),
    ("", "e", "e"),
    ("", "", ""),
    ("noooo", "yesssss", "enosy"),
    ("aretheyhere", "yestheyarehere", "aehrsty"),
    ("loopingisfunbutdangerous", "lessdangerousthancoding", "abcdefghilnoprstu"),
    ("inmanylanguages", "theresapairoffunctions", "acefghilmnoprstuy"),
    ("lordsofthefallen", "gamekult", "adefghklmnorstu")
)


class SimpleLettersTestCase(unittest.TestCase):
    def test_return_string_with_sorted_and_distinct_letters(self):
        for str_1, str_2, expected_str in test_values:
            with self.subTest():
                self.assertEqual(longest_string(str_1, str_2), expected_str)


if __name__ == '__main__':
    unittest.main()
