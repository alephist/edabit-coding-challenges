import unittest

from string_as_integer import string_int

test_values = (
    ('6', 6),
    ('10', 10),
    ('666', 666)
)


class StringToIntTestCase(unittest.TestCase):
    def test_convert_string_to_integer(self):
        for txt, expected in test_values:
            with self.subTest():
                self.assertEqual(string_int(txt), expected)


if __name__ == '__main__':
    unittest.main()
