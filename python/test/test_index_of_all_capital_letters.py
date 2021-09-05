import unittest

from typing import List, Tuple

from index_of_all_capital_letters import index_of_caps

test_values: Tuple[Tuple[str, List[int]]] = (
    ("eDaBiT", [1, 3, 5]),
    ("eQuINoX", [1, 3, 4, 6]),
    ("determine", []),
    ("STRIKE", [0, 1, 2, 3, 4, 5]),
    ("sUn", [1]),
    ("SpiDer", [0, 3]),
    ("accOmpAnY", [3, 6, 8]),
    ("@xCE#8S#i*$en", [2, 3, 6]),
    ("1854036297", []),
    ("Fo?.arg~{86tUx=|OqZ!", [0, 12, 16, 18])
)


class IndexOfAllCapitalLettersTestCase(unittest.TestCase):
    def test_return_index_of_all_capital_letters_from_word(self):
        for word, expected_list in test_values:
            with self.subTest():
                self.assertEqual(index_of_caps(word), expected_list)


if __name__ == '__main__':
    unittest.main()
