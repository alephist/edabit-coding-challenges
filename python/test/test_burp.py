import unittest

from typing import Tuple

from burp import long_burp

test_values: Tuple[Tuple[int, str]] = (
    (3, "Burrrp"),
    (5, "Burrrrrp"),
    (9, "Burrrrrrrrrp"),
    (10, "Burrrrrrrrrrp"),
    (13, "Burrrrrrrrrrrrrp"),
    (18, "Burrrrrrrrrrrrrrrrrrp"),
    (1, "Burp")
)


class BurpTestCase(unittest.TestCase):
    def test_add_num_amount_of_letter_r_in_burp(self):
        for num, expected in test_values:
            with self.subTest():
                self.assertEqual(long_burp(num), expected)


if __name__ == '__main__':
    unittest.main()
