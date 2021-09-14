import unittest

from typing import Tuple

from from_a_to_z import gimme_the_letters

test_values: Tuple[Tuple[str, str]] = (
    ("a-z", "abcdefghijklmnopqrstuvwxyz"),
    ("h-o", "hijklmno"),
    ("Q-Z", "QRSTUVWXYZ"),
    ("J-J", "J"),
    ("a-b", "ab"),
    ("A-A", "A"),
    ("g-i", "ghi"),
    ("H-I", "HI"),
    ("y-z", "yz"),
    ("e-k", "efghijk"),
    ("a-q", "abcdefghijklmnopq"),
    ("F-O", "FGHIJKLMNO")
)


class FromAToZTestCase(unittest.TestCase):
    def test_return_string_with_range_of_letters(self):
        for spectrum, expected_str in test_values:
            with self.subTest():
                self.assertEqual(gimme_the_letters(spectrum), expected_str)


if __name__ == '__main__':
    unittest.main()
