import unittest

from typing import Dict, List, Tuple

from numbers_to_dictionaries import num_to_dict

test_values: Tuple[Tuple[List[int], List[Dict[str, str]]]] = (
    ([118, 117, 120], [{'118': 'v'}, {'117': 'u'}, {'120': 'x'}]),
    ([101, 121, 110, 113, 113, 103], [{'101': 'e'}, {'121': 'y'}, {
     '110': 'n'}, {'113': 'q'}, {'113': 'q'}, {'103': 'g'}]),
    ([118, 103, 110, 109, 104, 106], [{"118": "v"}, {"103": "g"}, {
     "110": "n"}, {"109": "m"}, {"104": "h"}, {"106": "j"}]),
    ([107, 99, 110, 107, 118, 106, 112, 102], [{"107": "k"}, {"99": "c"}, {
     "110": "n"}, {"107": "k"}, {"118": "v"}, {"106": "j"}, {"112": "p"}, {"102": "f"}]),
    ([100, 100, 116, 105, 117, 121], [{"100": "d"}, {"100": "d"}, {
     "116": "t"}, {"105": "i"}, {"117": "u"}, {"121": "y"}])
)


class NumbersToDictionariesTestCase(unittest.TestCase):
    def test_create_a_dictionary_for_each_given_number_in_the_list(self):
        for lst, expected in test_values:
            with self.subTest():
                self.assertEqual(num_to_dict(lst), expected)


if __name__ == '__main__':
    unittest.main()
