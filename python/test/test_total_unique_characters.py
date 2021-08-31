import unittest

from typing import Tuple

from total_unique_characters import count_unique

test_values: Tuple[Tuple[str, str, int]] = (
    ("apple", "play", 5),
    ("sore", "zebra", 7),
    ("pip", "geeks", 6),
    ("a", "soup", 5),
    ("maniac", "maniac", 5)
)


class TotalUniqueCharactersTestCase(unittest.TestCase):
    def test_return_total_number_of_unique_characters_from_two_combined_strings(self):
        for s1, s2, expected_count in test_values:
            with self.subTest():
                self.assertEqual(count_unique(s1, s2), expected_count)


if __name__ == '__main__':
    unittest.main()
