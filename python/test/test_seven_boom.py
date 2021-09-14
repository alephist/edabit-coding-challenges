import unittest

from typing import List, Tuple

from seven_boom import seven_boom

test_values: Tuple[Tuple[List[int], str]] = (
    ([2, 6, 7, 9, 3], "Boom!"),
    ([33, 68, 400, 5], "there is no 7 in the list"),
    ([86, 48, 100, 66], "there is no 7 in the list"),
    ([76, 55, 44, 32], "Boom!"),
    ([35, 4, 9, 37], "Boom!")
)


class SevenBoomTestCase(unittest.TestCase):
    def test_check_if_there_is_a_seven_in_list(self):
        for lst, expected_message in test_values:
            with self.subTest():
                self.assertEqual(seven_boom(lst), expected_message)


if __name__ == '__main__':
    unittest.main()
