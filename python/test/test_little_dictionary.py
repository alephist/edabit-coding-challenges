import unittest

from typing import List, Tuple

from little_dictionary import dictionary

test_values: Tuple[Tuple[str, List[str], List[str]]] = (
    ('bu', ['button', 'breakfast', 'border'], ['button']),
    ('beau', ['pastry', 'delicious', 'name', 'boring'], []),
    ('there', ['there', 'here', 'everywhere'], ['there']),
    ('sno', ['snow', 'paper', 'ghost'], ['snow']),
    ('ma', ['marriage', 'married', 'many', 'delight'],
     ['marriage', 'married', 'many']),
    ('no', ['inferno', 'notion', 'nominate', 'note',
     'fairy'], ['notion', 'nominate', 'note']),
    ('cre', ['creating', 'creature', 'creed', 'increasing'],
     ['creating', 'creature', 'creed'])
)


class LittleDictionaryTestCase(unittest.TestCase):
    def test_return_list_of_words_that_start_with_input_initial(self):
        for initial, words, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(dictionary(initial, words), expected_lst)


if __name__ == '__main__':
    unittest.main()
