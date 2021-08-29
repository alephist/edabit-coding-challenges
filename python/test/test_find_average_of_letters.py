import unittest

from typing import List, Tuple

from find_average_of_letters import average_index

test_values: Tuple[Tuple[List[str], float]] = (
    (['a', 'b', 'c', 'i'], 3.75),
    (['e', 'd', 'a', 'b', 'i', 't'], 6.83),
    (['o', 'm', 'g'], 11.67),
    (['o', 'h', 'n', 'o'], 13.0),
    (['t', 'w', 'e', 'n', 't', 'y', 't', 'w', 'e', 'n', 't', 'y'], 17.83),
    (['y', 'o', 'u', 'a', 'r', 'e', 't', 'h', 'e', 'b', 'e', 's', 't'], 12.62)
)


class FindAverageOfLettersTestCase(unittest.TestCase):
    def test_find_the_average_of_the_letters_of_the_alphabet(self):
        for letters, expected_avg in test_values:
            with self.subTest():
                self.assertEqual(average_index(letters), expected_avg)


if __name__ == '__main__':
    unittest.main()
