import unittest

from typing import Tuple

from check_if_title_string import check_title

test_values: Tuple[Tuple[str, bool]] = (
    ("A Mind Boggling Achievement", True),
    ("A Simple Java Script Program!", True),
    ("Water is transparent", False),
    ("Edabit Is Wonderful!", True),
    ("We Love to relax", False),
    ("I want To eat bread", False)
)


class CheckIfTitleStringTestCase(unittest.TestCase):
    def test_check_if_txt_is_title_string(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(check_title(txt), expected)


if __name__ == '__main__':
    unittest.main()
