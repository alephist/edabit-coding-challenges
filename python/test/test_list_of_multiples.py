import unittest

from typing import List, Tuple

from list_of_multiples import list_of_multiples

test_values: Tuple[Tuple[int, int, List[int]]] = (
    (7, 5, [7, 14, 21, 28, 35]),
    (12, 10, [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]),
    (17, 7, [17, 34, 51, 68, 85, 102, 119]),
    (630, 14, [630, 1260, 1890, 2520, 3150, 3780,
     4410, 5040, 5670, 6300, 6930, 7560, 8190, 8820]),
    (140, 3, [140, 280, 420]),
    (7, 8, [7, 14, 21, 28, 35, 42, 49, 56]),
    (11, 21, [11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121,
     132, 143, 154, 165, 176, 187, 198, 209, 220, 231])
)


class ListOfMutiplesTestCase(unittest.TestCase):
    def test_return_list_multiples_of_num_given_input_length(self):
        for num, length, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(list_of_multiples(num, length), expected_lst)


if __name__ == '__main__':
    unittest.main()
