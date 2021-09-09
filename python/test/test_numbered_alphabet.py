import unittest

from typing import Tuple

from numbered_alphabet import alph_num

test_values: Tuple[Tuple[str, str]] = (
    ("ABCD", "0 1 2 3"),
    ("BCDA", "1 2 3 0"),
    ("AAA", "0 0 0"),
    ("XYZ", "23 24 25")
)


class NumberedAlphabetTestCase(unittest.TestCase):
    def test_convert_list_of_letters_to_their_respective_number_in_alphabet(self):
        for txt, expected_txt in test_values:
            with self.subTest():
                self.assertEqual(alph_num(txt), expected_txt)


if __name__ == '__main__':
    unittest.main()
