import unittest

from typing import List, Tuple

from capitalize_names import cap_me

test_values: Tuple[Tuple[List[str], List[str]]] = (
    (['mavis', 'senaida', 'letty'], ['Mavis', 'Senaida', 'Letty']),
    (['samuel', 'MABELLE', 'letitia', 'meridith'],
     ['Samuel', 'Mabelle', 'Letitia', 'Meridith']),
    (['Slyvia', 'Kristal', 'Sharilyn', 'Calista'],
     ['Slyvia', 'Kristal', 'Sharilyn', 'Calista']),
    (['krisTopher', 'olIva', 'herminiA'], ['Kristopher', 'Oliva', 'Herminia']),
    (['luke', 'marsha', 'stanford'], ['Luke', 'Marsha', 'Stanford']),
    (['kara'], ['Kara']),
    (['mARIANN', 'jOI', 'gEORGEANN'], ['Mariann', 'Joi', 'Georgeann'])
)


class CapitalizeNamesTestCase(unittest.TestCase):
    def test_capitalize_first_letter_of_each_name_in_list(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(cap_me(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
