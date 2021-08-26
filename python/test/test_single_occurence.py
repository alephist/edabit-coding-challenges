import unittest

from typing import Tuple

from single_occurence import single_occurence

test_values: Tuple[Tuple[str, str]] = (
    ("EFFEAABbc", "C"),
    ("AAAAVNNNNSS", "V"),
    ("S", "S"),
    ("", ""),
    ("eEDABITaebiT", "D"),
    ("iSs", "I"),
    ("GOODd", "G")
)


class SingleOccurenceTestCase(unittest.TestCase):
    def test_get_letter_that_has_a_single_occurence(self):
        for txt, expected_letter in test_values:
            with self.subTest():
                self.assertEqual(single_occurence(txt), expected_letter)


if __name__ == '__main__':
    unittest.main()
