import unittest

from typing import Tuple

from count_capital_letters import capital_letters

test_values: Tuple[Tuple[str, int]] = (
    ("hvbHKuFxMORMuBYRsgNF", 12),
    ("nrrvrXlmfwjwlbcjwrzt", 1),
    ("VdefGMkIeTUipnLhnIfe", 8),
    ("ShwvYyeQdGsJYRBhoihI", 9),
    ("ykEblUluPthiCMhxQFlz", 7),
    ("NCdLUzNdihwUumkqfJqN", 8),
    ("sdbMinvzxxulkzyzhfWe", 2),
    ("NEcLjmRMJEXwnBkiPpCO", 12),
    ("KVFifdDbnuWdkDdmDAkO", 9),
    ("pkgUmnquvzIueBlLbtYu", 5),
    ("xbbpykGhycjVEvCdaMew", 5),
    ("YVgbDlgZDDaGkOymseSP", 10),
    ("miuyhtTofqSuoCrgyhtc", 3),
    ("YYoNuXdYJhHIPFZZndya", 12),
    ("LRuGZepMZYIwQWXJpoTB", 14),
    ("gmEosHVTLNEsYOFLCrRR", 14),
    ("dPiadMjurjCjrgYbceuK", 5),
    ("PQgSxLADOswVPWoDBgCD", 14),
    ("odoaxlnmuyixnpthidus", 0),
    ("XcqykqdmvtuMynFhnayf", 3)
)


class CountCapitalLettersTestCase(unittest.TestCase):
    def test_return_count_of_capital_letters_in_string(self):
        for txt, expected_count in test_values:
            with self.subTest():
                self.assertEqual(capital_letters(txt), expected_count)


if __name__ == '__main__':
    unittest.main()
