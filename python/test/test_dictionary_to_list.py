import unittest

from typing import Tuple

from dictionary_to_list import Dictionary, ItemList, dict_to_list

test_values: Tuple[Tuple[Dictionary, ItemList]] = (
    ({'D': 1, 'B': 2, 'C': 3}, [('B', 2), ('C', 3), ('D', 1)]),
    ({'likes': 2, 'dislikes': 3, 'followers': 10}, [
     ('dislikes', 3), ('followers', 10), ('likes', 2)])
)


class DictionaryToListTestCase(unittest.TestCase):
    def test_convert_dictionary_to_list_of_key_value_tuples(self):
        for d, expected_list in test_values:
            with self.subTest():
                self.assertEqual(dict_to_list(d), expected_list)


if __name__ == '__main__':
    unittest.main()
