import unittest

from minutes_into_seconds import convert_to_seconds

test_values = ((6, 360), (4, 240), (8, 480), (60, 3600))


class MinutesIntoSecondsTestCase(unittest.TestCase):
    def test_convert_minutes_into_seconds(self):
        for minute, expected in test_values:
            with self.subTest():
                self.assertEqual(convert_to_seconds(minute), expected)


if __name__ == '__main__':
    unittest.main()
