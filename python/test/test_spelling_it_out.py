import unittest

from typing import List, Tuple

from spelling_it_out import spelling

test_values: Tuple[Tuple[str, List[str]]] = (
    ("bee", ['b', 'be', 'bee']),
    ("cake", ['c', 'ca', 'cak', 'cake']),
    ("happy", ['h', 'ha', 'hap', 'happ', 'happy']),
    ("eagerly", ['e', 'ea', 'eag', 'eage', 'eager', 'eagerl', 'eagerly']),
    ("believe", ['b', 'be', 'bel', 'beli', 'belie', 'believ', 'believe'])
)


class SpellingItOutTestCase(unittest.TestCase):
    def test_spell_out_input_test_until_list_is_completed(self):
        for txt, expected_list in test_values:
            with self.subTest():
                self.assertEqual(spelling(txt), expected_list)


if __name__ == '__main__':
    unittest.main()
