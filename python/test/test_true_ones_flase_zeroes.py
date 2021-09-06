import unittest

from typing import List, Tuple

from true_ones_false_zeroes import integer_boolean

test_values: Tuple[Tuple[str, List[bool]]] = (
    ("100101", [True, False, False, True, False, True]),
    ("10", [True, False]),
    ("001", [False, False, True]),
    ("", []),
    ("111", [True, True, True]),
    ("000", [False, False, False]),
    ("10010110", [True, False, False, True, False, True, True, False])
)


class TrueOnesFalseZeroesTestCase(unittest.TestCase):
    def test_return_list_of_booleans_from_input_num_string(self):
        for n, expected_list in test_values:
            with self.subTest():
                self.assertEqual(integer_boolean(n), expected_list)


if __name__ == '__main__':
    unittest.main()
