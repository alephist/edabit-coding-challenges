import unittest

from typing import Dict, Tuple

from names_ages_occupations import organize

test_values: Tuple[Tuple[str], Dict[str, str]] = (
    ("Jameel Saeb, 15, CEO of facebook", {
     'name': 'Jameel Saeb', 'age': 15, 'occupation': 'CEO of facebook'}),
    ("John Mayer, 41, Singer", {
     'name': "John Mayer", 'age': 41, 'occupation': "Singer"}),
    ("Emily Blunt, 36, Actor", {
     'name': "Emily Blunt", 'age': 36, 'occupation': 'Actor'}),
    ("Conan O'Brien, 56, Talk Show Host", {
     'name': "Conan O'Brien", 'age': 56, 'occupation': "Talk Show Host"}),
    ("Georg bullock, 31, Brother of an actor", {
     'name': 'Georg bullock', 'age': 31, 'occupation': 'Brother of an actor'}),
    ("", {})
)


class NamesAgesOccupationsTestCase(unittest.TestCase):
    def test_return_dictionary_of_name_age_and_occupation_pairs(self):
        for txt, expected_dict in test_values:
            with self.subTest():
                self.assertEqual(organize(txt), expected_dict)


if __name__ == '__main__':
    unittest.main()
