import unittest

from typing import Dict, Tuple

from convert_dictionary_to_list import ItemList, to_list

test_values: Tuple[Tuple[Dict[str, int], ItemList]] = (
    ({'a': 1, 'b': 2}, [["a", 1], ["b", 2]]),
    ({'foo': 33, 'bar': 45, 'baz': 67}, [
     ["bar", 45], ["baz", 67], ["foo", 33]]),
    ({'shrimp': 15, 'tots': 12}, [["shrimp", 15], ["tots", 12]]),
    ({}, [])
)


class ConvertDictionaryToListTestCase(unittest.TestCase):
    def test_convert_dictionary_to_list_consisting_of_key_value_pair(self):
        for dct, expected_list in test_values:
            with self.subTest():
                self.assertEqual(to_list(dct), expected_list)


if __name__ == '__main__':
    unittest.main()
