import unittest

from typing import List, Tuple

from instant_jazz import jazzify

test_values: Tuple[Tuple[List[str], List[str]]] = (
    (['G', 'F', 'C'], ['G7', 'F7', 'C7']),
    (['Dm', 'G', 'E', 'A'], ['Dm7', 'G7', 'E7', 'A7']),
    (['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'],
     ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']),
    (['G', 'C7'], ['G7', 'C7']),
    ([], [])
)


class InstantJazzTestCase(unittest.TestCase):
    def test_add_number_seven_to_chord_from_list(self):
        for lst, expected_list in test_values:
            with self.subTest():
                self.assertEqual(jazzify(lst), expected_list)


if __name__ == '__main__':
    unittest.main()
