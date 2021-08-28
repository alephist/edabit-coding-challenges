import unittest

from typing import List, Tuple

from scoring_system import calculate_scores

test_values: Tuple[Tuple[str, List[int]]] = (
    ("AAB", [2, 1, 0]),
    ("ABC", [1, 1, 1]),
    ("ABCBACC", [2, 2, 3]),
    ("CCBBBB", [0, 4, 2]),
    ("CCAABBAABBCC", [4, 4, 4]),
    ("A", [1, 0, 0]),
    ("", [0, 0, 0]),
    ("ACCCA", [2, 0, 3]),
)


class ScoringSystemTestCase(unittest.TestCase):
    def test_return_player_scores(self):
        for txt, expected_scores in test_values:
            with self.subTest():
                self.assertEqual(calculate_scores(txt), expected_scores)


if __name__ == '__main__':
    unittest.main()
