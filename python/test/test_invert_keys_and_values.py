import unittest

from typing import Dict, Tuple

from invert_keys_and_values import invert

test_values: Tuple[Tuple[Dict, Dict]] = (
    ({"a": 1, "b": 2, "c": 3}, {1: "a", 2: "b", 3: "c"}),
    ({"z": "q", "w": "f"}, {"q": "z", "f": "w"}),
    ({"zebra": "koala", "horse": "camel"}, {"koala": "zebra", "camel": "horse"})
)


class InvertKeysAndValuesTestCase(unittest.TestCase):
    def test_invert_key_value_pairs_in_dictionary(self):
        for dct, expected_dct in test_values:
            with self.subTest():
                self.assertEqual(invert(dct), expected_dct)


if __name__ == '__main__':
    unittest.main()
