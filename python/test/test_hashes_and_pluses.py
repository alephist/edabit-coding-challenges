import unittest

from typing import List, Tuple

from hashes_and_pluses import hash_plus_count

test_values: Tuple[Tuple[str, List[int]]] = (
    ("####", [4, 0]),
    ("#", [1, 0]),
    ("+++++++", [0, 7]),
    ("++", [0, 2]),
    ("#+#+", [2, 2]),
    ("###+", [3, 1]),
    ("##+++#", [3, 3]),
    ("#+++#+#++#", [4, 6]),
    ("", [0, 0])
)


class HashesAndPlusesTestCase(unittest.TestCase):
    def test_return_count_of_hashes_and_pluses_in_string(self):
        for txt, expected_list in test_values:
            with self.subTest():
                self.assertEqual(hash_plus_count(txt), expected_list)


if __name__ == '__main__':
    unittest.main()
