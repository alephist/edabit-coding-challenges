import unittest

from typing import List, Tuple

from list_consecutive_numbers import get_sequence

test_values: Tuple[Tuple[int, int, List[int]]] = (
    (1, 5, [1, 2, 3, 4, 5]),
    (98, 100, [98, 99, 100]),
    (1000, 1000, [1000]),
    (1450, 1460, [1450, 1451, 1452, 1453, 1454,
     1455, 1456, 1457, 1458, 1459, 1460]),
    (0, 3, [0, 1, 2, 3]),
    (-10, 1, [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0,  1]),
    (-100, -100, [-100])
)


class ListConsecutiveNumbersTestCase(unittest.TestCase):
    def test_get_sequence_of_numbers_from_low_to_high(self):
        for low, high, expected_list in test_values:
            with self.subTest():
                self.assertEqual(get_sequence(low, high), expected_list)


if __name__ == '__main__':
    unittest.main()
