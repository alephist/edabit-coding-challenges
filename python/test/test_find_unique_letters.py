import unittest

from typing import List, Tuple

from find_unique_letters import find_letters

test_values: Tuple[Tuple[str, List[str]]] = (
    ("monopoly", ["m", "n", "p", "l", "y"]),
    ("balloon", ["b", "a", "n"]),
    ("analysis",  ["n", "l", "y", "i"]),
    ("summer", ["s", "u", "e", "r"]),
    ("apple", ["a", "l", "e"]),
    ("commission", ["c", "n"]),
    ("fox", ["f", "o", "x"])
)


class FindUniqueLetterTestCase(unittest.TestCase):
    def test_return_list_of_letters_that_occur_only_once(self):
        for word, expected_list in test_values:
            with self.subTest():
                self.assertEqual(find_letters(word), expected_list)


if __name__ == '__main__':
    unittest.main()
