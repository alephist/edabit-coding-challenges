import unittest

from typing import Tuple

from remove_first_last_characters import remove_first_last

test_values: Tuple[Tuple[str, str]] = (
    ("hello", "ell"),
    ("benefit", "enefi"),
    ("wordy", "ord"),
    ("maybe", "ayb"),
    ("to", "to"),
    ("a", "a"),
    ("", "")
)


class RemoveFirstLastCharactersTestCase(unittest.TestCase):
    def test_remove_first_and_last_characters_from_string(self):
        for txt, expected_str in test_values:
            with self.subTest():
                self.assertEqual(remove_first_last(txt), expected_str)


if __name__ == '__main__':
    unittest.main()
