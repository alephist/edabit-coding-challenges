import unittest

from typing import List, Tuple, Union

from zip_it import ListPair, zip_it

test_values: Tuple[Tuple[List[str], List[str], Union[ListPair, str]]] = (
    (["Elise", "Mary"], ["John", "Rick"], [("Elise", "John"), ("Mary", "Rick")]),
    (["Ana", "Amy", "Lisa"], ["Bob", "Josh"], "sizes don't match"),
    (["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"], [
     ("Ana", "Bob"), ("Amy", "Josh"), ("Lisa", "Tim")]),
    (["Ana", "Amy", "Lisa", "Katty"], ["Bob", "Josh", "Tim"], "sizes don't match"),
    (["Katty", "Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim", "Aaron"], [
     ("Katty", "Bob"), ("Ana", "Josh"), ("Amy", "Tim"), ("Lisa", "Aaron")])
)


class ZipItTestCase(unittest.TestCase):
    def test_return_list_of_pairs_of_women_and_men(self):
        for women, men, expected in test_values:
            with self.subTest():
                self.assertEqual(zip_it(women, men), expected)


if __name__ == '__main__':
    unittest.main()
