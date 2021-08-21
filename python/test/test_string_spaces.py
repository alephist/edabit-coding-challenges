import unittest

from typing import Tuple

from string_spaces import has_spaces

test_values: Tuple[Tuple[str, bool]] = (
    ("Foo", False),
    ("Foo bar", True),
    ("Foo ", True),
    (" Foo", True),
    (" ", True),
    ("", False),
    (",./;'[]-=", False)
)


class StringSpacesTestCase(unittest.TestCase):
    def test_check_if_string_has_whitespace(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(has_spaces(txt), expected)


if __name__ == '__main__':
    unittest.main()
