import unittest

from typing import List, Tuple

from character_ascii_dictionary import LetterASCIIDict, to_dict

test_values: Tuple[Tuple[List[str], LetterASCIIDict]] = (
    (["a", "b", "c"], [{"a": 97}, {"b": 98}, {"c": 99}]),
    (["!", ".", "?"], [{"!": 33}, {".": 46}, {"?": 63}]),
    (["^"], [{"^": 94}]),
    ([" "], [{" ": 32}]),
    ([], [])
)


class CharacterASCIITestCase(unittest.TestCase):
    def test_return_list_of_character_ascii_value_pair(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(to_dict(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
