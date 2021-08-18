import unittest

from typing import Tuple

from divides_evenly import divides_evenly

test_values: Tuple[Tuple[int, int, bool]] = (
    (98, 7, True),
    (87, 49, False),
    (34, 14, False),
    (78, 6, True),
    (30, 4, False),
    (87, 73, False),
    (74, 7, False),
    (87, 29, True),
    (48, 24, True),
    (99, 20, False),
    (98, 49, True),
    (100, 6, False),
    (64, 4, True),
    (70, 35, True),
    (38, 38, True),
    (29, 3, False),
    (20, 8, False),
    (66, 50, False),
    (95, 1, True),
    (58, 2, True),
)


class DividesEvenlyTestCase(unittest.TestCase):
    def test_a_divides_evenly_with_b(self):
        for a, b, expected in test_values:
            with self.subTest():
                self.assertEqual(divides_evenly(a, b), expected)


if __name__ == '__main__':
    unittest.main()
