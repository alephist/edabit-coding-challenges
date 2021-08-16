import unittest

from first_element_in_list import get_first_value

test_values = (
    ([1, 2, 3], 1),
    ([80, 5, 100], 80),
    ([-500, 0, 50], -500),
    ([5, 2, 3], 5),
    ([75675, 5, 100], 75675),
    ([-52320, 0, 50], -52320)
)


class FirstElementInListTestCase(unittest.TestCase):
    def test_get_first_element_in_list(self):
        for number_list, expected in test_values:
            with self.subTest():
                self.assertEqual(get_first_value(number_list), expected)


if __name__ == '__main__':
    unittest.main()
