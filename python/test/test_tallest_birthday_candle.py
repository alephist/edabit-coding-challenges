import unittest

from typing import List, Tuple

from tallest_birthday_candle import birthday_cake_candles

test_values: Tuple[Tuple[List[int], int]] = (
    ([4, 4, 1, 3], 2),
    ([3, 2, 1, 3], 2),
    ([82, 49, 82, 82, 41, 82, 15, 63, 38, 25], 4),
    ([18, 90, 90, 13, 90, 75, 90, 8, 90, 43], 5)
)


class TallestBirthdayCandleTestCase(unittest.TestCase):
    def test_get_count_of_tallest_candles(self):
        for candles, expected_count in test_values:
            with self.subTest():
                self.assertEqual(birthday_cake_candles(
                    candles), expected_count)


if __name__ == '__main__':
    unittest.main()
