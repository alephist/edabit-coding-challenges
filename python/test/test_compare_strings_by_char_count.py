import unittest

from typing import Tuple

from compare_strings_by_char_count import comp

test_values: Tuple[Tuple[str, str, bool]] = (
    ("AB", "CD", True),
    ("ABC", "DE", False),
    ("hello", "edabit", False),
    ("meow", "woof", True),
    ("jrnvjrnnt", "cvjknfjvmfvnfjn", False),
    ("jkvnjrt", "krnf", False),
    ("Facebook", "Snapchat", True)
)


class CompareStringsByCharCountTestCase(unittest.TestCase):
    def test_check_if_two_strings_have_the_same_length(self):
        for txt1, txt2, expected in test_values:
            with self.subTest():
                self.assertEqual(comp(txt1, txt2), expected)


if __name__ == '__main__':
    unittest.main()
