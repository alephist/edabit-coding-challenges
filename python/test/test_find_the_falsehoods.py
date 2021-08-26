import unittest

from typing import Any, List, Tuple

from find_the_falsehoods import find_the_falsehoods

test_values: Tuple[Tuple[List[Any], List[Any]]] = (
    ([0, 1, 2, 3], [0]),
    (["", "a", "ab"], [""]),
    ([None, 1, [], [0], 0], [None, [], 0]),
    ([], []),
    ([[]], [[]]),
    ([[[]]], []),
    (["0", 1, "", "[]", [], [""], 0, (), {}], ["", [], 0, (), {}])
)


class FindTheFalsehoodsTestCase(unittest.TestCase):
    def test_find_falsy_values_in_input_list(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(find_the_falsehoods(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
