import unittest

from typing import List, Tuple

from where_is_bob import find_bob

test_values: Tuple[Tuple[List[str], int]] = (
    (["Jimmy", "Layla", "Mandy"], -1),
    (["Bob", "Nathan", "Hayden"], 0),
    (["Paul", "Layla", "Bob"], 2),
    (["Garry", "Maria", "Bethany", "Bob", "Pauline"], 3)
)


class WhereIsBobTestCase(unittest.TestCase):
    def test_return_index_for_name_Bob_from_list(self):
        for names, expected_index in test_values:
            with self.subTest():
                self.assertEqual(find_bob(names), expected_index)


if __name__ == '__main__':
    unittest.main()
