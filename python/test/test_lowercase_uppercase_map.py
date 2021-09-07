import unittest

from typing import Dict, List, Tuple

from lowercase_uppercase_map import mapping

test_values: Tuple[Tuple[List[str], Dict[str, str]]] = (
    (["a", "b", "c"], {"a": "A", "b": "B", "c": "C"}),
    (["p", "s", "t"], {"p": "P", "s": "S", "t": "T"}),
    (["a", "v", "y", "z"], {"a": "A", "v": "V", "y": "Y", "z": "Z"})
)


class LowercaseUppercaseMapTestCase(unittest.TestCase):
    def test_return_dictionary_of_lowercase_uppercase_pair_of_letters_from_list(self):
        for letters, expected_dict in test_values:
            with self.subTest():
                self.assertEqual(mapping(letters), expected_dict)


if __name__ == '__main__':
    unittest.main()
