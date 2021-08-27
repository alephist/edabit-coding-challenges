import unittest

from typing import Tuple

from reverse_and_capitalize import reverse_capitalize

test_values: Tuple[Tuple[str, str]] = (
    ("edabit", "TIBADE"),
    ("abc", "CBA"),
    ("hellothere", "EREHTOLLEH"),
    ("input", "TUPNI"),
    ("indubitably", "YLBATIBUDNI")
)


class ReverseAndCapitalizeTestCase(unittest.TestCase):
    def test_return_a_reversed_and_capitalized_string(self):
        for txt, expected_txt in test_values:
            with self.subTest():
                self.assertEqual(reverse_capitalize(txt), expected_txt)


if __name__ == '__main__':
    unittest.main()
