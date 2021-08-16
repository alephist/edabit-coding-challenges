import unittest

from hours_minutes_to_seconds import convert_to_seconds

test_values = (
    (1, 0, 3600),
    (1, 3, 3780),
    (0, 30, 1800)
)


class HoursMinutesToSecondsTestCase(unittest.TestCase):
    def test_convert_hours_and_minutes_to_seconds(self):
        for hours, minutes, expected in test_values:
            with self.subTest():
                self.assertEqual(convert_to_seconds(hours, minutes), expected)


if __name__ == '__main__':
    unittest.main()
