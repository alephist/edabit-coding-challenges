import unittest

from typing import Any, Tuple

from nothing_is_nothing import nothing_is_nothing

test_values: Tuple[Tuple[Any, bool]] = (
    (0, False, [], {}, False),
    (33, 'Hello', (True, True, 3), True),
    (True, None, False),
    (None, None, False),
    (None, True, False),
    (221, True),
    (221, 0, 0, 0, False),
    ([221, 0, 0, 0], True)
)


class NothingIsNothingTestCase(unittest.TestCase):
    def test_check_if_all_values_are_truthy(self):
        for test_value in test_values:
            with self.subTest():
                *args, expected = test_value
                self.assertEqual(nothing_is_nothing(*args), expected)


if __name__ == '__main__':
    unittest.main()
