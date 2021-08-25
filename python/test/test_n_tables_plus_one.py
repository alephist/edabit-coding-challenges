import unittest

from typing import Tuple

from n_tables_plus_one import n_tables_plus_one

test_values: Tuple[Tuple[int, str]] = (
    (1, "2,3,4,5,6,7,8,9,10,11"),
    (7, "8,15,22,29,36,43,50,57,64,71"),
    (134, "135,269,403,537,671,805,939,1073,1207,1341")
)


class NTablePlusOneTestCase(unittest.TestCase):
    def test_get_first_ten_multiples_of_num_with_one_added_to_each_separated_by_comma(self):
        for num, expected_str in test_values:
            with self.subTest():
                self.assertEqual(n_tables_plus_one(num), expected_str)


if __name__ == '__main__':
    unittest.main()
