import unittest

from sum_of_all_elements import get_sum_of_elements

test_values = (
    ([2, 7, 4], 13),
    ([45, 3, 0], 48),
    ([-2, 84, 23], 105)
)


class SumOfElementsTestCase(unittest.TestCase):
    def test_get_sum_of_all_elements_in_a_list(self):
        for lst, expected in test_values:
            with self.subTest():
                self.assertEqual(get_sum_of_elements(lst), expected)


if __name__ == '__main__':
    unittest.main()
