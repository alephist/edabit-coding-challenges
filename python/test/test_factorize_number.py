import unittest

from typing import List, Tuple

from factorize_number import factorize

test_values: Tuple[Tuple[int, List[int]]] = (
    (12, [1, 2, 3, 4, 6, 12]),
    (4, [1, 2, 4]),
    (17, [1, 17]),
    (24, [1, 2, 3, 4, 6, 8, 12, 24]),
    (1, [1])
)


class FactorizeNumberTestCase(unittest.TestCase):
    def test_return_list_of_factors_of_num(self):
        for num, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(factorize(num), expected_lst)


if __name__ == '__main__':
    unittest.main()
