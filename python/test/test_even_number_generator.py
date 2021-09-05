import unittest

from typing import List, Tuple

from even_number_generator import find_even_nums

test_values: Tuple[Tuple[int, List[int]]] = (
    (4, [2, 4]),
    (8, [2, 4, 6, 8]),
    (2, [2]),
    (1, []),
    (9, [2, 4, 6, 8]),
    (11, [2, 4, 6, 8, 10])
)


class EvenNumberGeneratorTestCase(unittest.TestCase):
    def test_return_list_of_even_numbers(self):
        for num, expected_list in test_values:
            with self.subTest():
                self.assertEqual(find_even_nums(num), expected_list)


if __name__ == '__main__':
    unittest.main()
