import unittest

from typing import Tuple

from harshad_number import is_harshad

test_values: Tuple[Tuple[int, bool]] = (
    (75, False),
    (171, True),
    (481, True),
    (89, False),
    (516, True),
    (200, True),
    (209, True),
    (12345, True),
    (53, False),
    (27, True)
)


class HarshadNumberTestCase(unittest.TestCase):
    def test_check_if_num_is_a_harshad_number(self):
        for num, expected_value in test_values:
            with self.subTest():
                self.assertEqual(is_harshad(num), expected_value)


if __name__ == '__main__':
    unittest.main()
