import unittest

from typing import List, Tuple

from filter_repeating_strings import identical_filter

test_values: Tuple[Tuple[List[str], List[str]]] = (
    (['aaaaaa', 'bc', 'd', 'eeee', 'xyz'], ['aaaaaa', 'd', 'eeee']),
    (['88', '999', '22', '545', '133'], ['88', '999', '22']),
    (['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo'], []),
    (['aa', 'bb', 'cc', 'dd', 'ee'], ['aa', 'bb', 'cc', 'dd', 'ee']),
    (['aba', 'bcb', 'abb', 'bcc', 'eee'], ['eee']),
    (['1', '2', '3'], ['1', '2', '3'])
)


class FilterRepeatingStringsTestCase(unittest.TestCase):
    def test_return_list_of_strings_with_identical_characters(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(identical_filter(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
