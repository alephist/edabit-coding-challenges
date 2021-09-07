import unittest

from typing import Tuple

from capitalize_by_ascii import ascii_capitalize

test_values: Tuple[Tuple[str, str]] = (
    ("Oh what a beautiful morning.", "oH wHaT a BeauTiFuL moRNiNg."),
    ("THE LITTLE MERMAID", "THe LiTTLe meRmaiD"),
    ("to be or not to be!", "To Be oR NoT To Be!")
)


class CapitalizeByASCIITestCase(unittest.TestCase):
    def test_capitalize_letter_if_ASCII_code_is_even(self):
        for txt, expected_txt in test_values:
            with self.subTest():
                self.assertEqual(ascii_capitalize(txt), expected_txt)


if __name__ == '__main__':
    unittest.main()
