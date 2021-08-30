import unittest

from typing import Tuple

from string_identical_characters import is_identical

test_values: Tuple[Tuple[str, bool]] = (
    ("kkkkk", True),
    ("ckkkk", False),
    ("kkkkck", False),
    ("aabc", False),
    ("ccc", True),
    ("aabbbb", False),
    ("bbbbbb", True)
)


class StringIdenticalCharactersTestCase(unittest.TestCase):
    def test_check_if_string_only_has_identical_characters(self):
        for s, expected in test_values:
            with self.subTest():
                self.assertEqual(is_identical(s), expected)


if __name__ == '__main__':
    unittest.main()
