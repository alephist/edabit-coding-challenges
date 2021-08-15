import unittest

from hours_into_seconds import convert_to_seconds

test_values = ((2, 7200), (10, 36000), (24, 86400), (36, 129600))


class HoursToSecondsTestCase(unittest.TestCase):
    def test_convert_hours_into_seconds(self):
        for hours, expected in test_values:
            with self.subTest():
                self.assertEqual(convert_to_seconds(hours), expected)


if __name__ == '__main__':
    unittest.main()
