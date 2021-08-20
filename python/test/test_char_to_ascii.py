import unittest

from typing import Tuple

from char_to_ascii import convert_to_ascii

test_values: Tuple[Tuple[str, int]] = (
    (' ', 32),
    ('A', 65),
    (']', 93),
    ('^', 94),
    ('c', 99)
)


class CharToASCIITestCase(unittest.TestCase):
    def test_convert_char_to_ascii(self):
        for char, expected in test_values:
            with self.subTest():
                self.assertEqual(convert_to_ascii(char), expected)


if __name__ == '__main__':
    unittest.main()
