import unittest

from typing import List, Tuple

from sort_list_by_string_length import sort_by_length

test_values: Tuple[Tuple[List[str], List[str]]] = (
    (["Google", "Apple", "Microsoft"], ["Apple", "Google", "Microsoft"]),
    (["Leonardo", "Michelangelo", "Raphael", "Donatello"],
     ["Raphael", "Leonardo", "Donatello", "Michelangelo"]),
    (["Turing", "Einstein", "Jung"], ["Jung", "Turing", "Einstein"]),
    (["Tatooine", "Hoth", "Yavin", "Dantooine"],
     ["Hoth", "Yavin", "Tatooine", "Dantooine"]),
    (["Mario", "Bowser", "Link"], ["Link", "Mario", "Bowser"])
)


class SortListByStringLengthTestCase(unittest.TestCase):
    def test_sort_list_by_string_length(self):
        for lst, expected_list in test_values:
            with self.subTest():
                self.assertEqual(sort_by_length(lst), expected_list)


if __name__ == '__main__':
    unittest.main()
