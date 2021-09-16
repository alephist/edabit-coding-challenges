import unittest

from typing import List, Tuple

from golf_score import golf_score

test_values: Tuple[Tuple[List[int], List[str], int]] = (
    ([4, 4, 4, 4, 5, 3, 3, 4, 3, 5, 4, 4, 3, 4, 5, 4, 4, 5], ['double-bogey', 'par', 'par', 'double-bogey', 'eagle',
     'par', 'bogey', 'birdie', 'birdie', 'bogey', 'par', 'birdie', 'par', 'par', 'par', 'par', 'bogey', 'par'], 74),
    ([5, 4, 4, 4, 4, 4, 5, 4, 3, 3, 4, 5, 3, 4, 4, 3, 5, 4], ['par', 'bogey', 'birdie', 'bogey', 'par', 'birdie',
     'par', 'bogey', 'eagle', 'par', 'par', 'birdie', 'par', 'eagle', 'double-bogey', 'birdie', 'par', 'birdie'], 68),
    ([4, 3, 4, 4, 5, 4, 5, 4, 4, 4, 3, 5, 4, 4, 3, 4, 3, 5], ['bogey', 'par', 'birdie', 'par', 'par', 'birdie',
     'bogey', 'par', 'par', 'double-bogey', 'par', 'double-bogey', 'par', 'eagle', 'par', 'par', 'par', 'par'], 74),
    ([4, 5, 4, 4, 4, 5, 5, 3, 4, 5, 4, 3, 4, 3, 3, 4, 4, 4], ['par', 'par', 'eagle', 'bogey', 'birdie', 'par',
     'par', 'par', 'birdie', 'eagle', 'bogey', 'bogey', 'par', 'par', 'par', 'par', 'birdie', 'bogey'], 69),
    ([5, 5, 3, 5, 4, 4, 3, 4, 4, 4, 3, 3, 4, 4, 4, 5, 4, 4], ['birdie', 'par', 'par', 'par', 'bogey', 'bogey',
     'bogey', 'double-bogey', 'par', 'par', 'par', 'par', 'eagle', 'par', 'double-bogey', 'par', 'birdie', 'par'], 75),
    ([4, 4, 4, 4, 5, 3, 4, 4, 3, 5, 3, 4, 5, 3, 4, 5, 4, 4], ['eagle', 'par', 'birdie', 'par', 'par', 'par',
     'bogey', 'birdie', 'par', 'bogey', 'birdie', 'double-bogey', 'par', 'par', 'par', 'par', 'par', 'par'], 71),
    ([4, 5, 4, 4, 4, 4, 3, 5, 4, 3, 5, 5, 4, 3, 3, 4, 4, 4], ['par', 'par', 'bogey', 'birdie', 'birdie', 'par',
     'par', 'par', 'par', 'bogey', 'par', 'par', 'birdie', 'par', 'birdie', 'bogey', 'birdie', 'double-bogey'], 72),
    ([4, 5, 3, 4, 4, 4, 4, 3, 4, 5, 4, 5, 4, 4, 4, 3, 5, 3], ['double-bogey', 'birdie', 'eagle', 'par', 'par', 'birdie',
     'par', 'par', 'double-bogey', 'par', 'par', 'par', 'birdie', 'par', 'bogey', 'par', 'birdie', 'par'], 71),
    ([5, 5, 4, 5, 3, 4, 3, 4, 5, 3, 4, 4, 4, 4, 4, 4, 3, 4], ['par', 'par', 'eagle', 'bogey', 'bogey', 'par',
     'birdie', 'par', 'par', 'par', 'par', 'birdie', 'birdie', 'eagle', 'par', 'birdie', 'par', 'birdie'], 65),
    ([5, 3, 4, 4, 4, 4, 5, 3, 4, 4, 4, 3, 4, 5, 4, 5, 4, 3], ['bogey', 'eagle', 'par', 'eagle', 'bogey', 'birdie',
     'par', 'par', 'birdie', 'birdie', 'eagle', 'birdie', 'par', 'double-bogey', 'par', 'bogey', 'bogey', 'par'], 68),
    ([5, 4, 4, 3, 5, 4, 4, 4, 4, 5, 4, 3, 4, 3, 4, 5, 4, 3], ['birdie', 'par', 'par', 'par', 'par', 'par',
     'par', 'eagle', 'birdie', 'par', 'bogey', 'birdie', 'bogey', 'birdie', 'par', 'par', 'birdie', 'par'], 67),
    ([4, 4, 4, 3, 4, 4, 4, 5, 4, 3, 4, 3, 5, 3, 4, 5, 4, 5], ['double-bogey', 'par', 'bogey', 'birdie', 'par',
     'par', 'birdie', 'par', 'par', 'par', 'par', 'par', 'bogey', 'par', 'par', 'birdie', 'birdie', 'par'], 72),
    ([4, 3, 4, 4, 3, 5, 4, 4, 5, 3, 4, 3, 5, 4, 4, 4, 5, 4], ['par', 'eagle', 'bogey', 'par', 'birdie', 'bogey', 'par',
     'par', 'birdie', 'par', 'par', 'double-bogey', 'par', 'bogey', 'bogey', 'double-bogey', 'par', 'bogey'], 77),
    ([3, 4, 5, 3, 4, 5, 3, 5, 4, 4, 4, 4, 4, 3, 5, 4, 4, 4], ['double-bogey', 'par', 'par', 'par', 'bogey', 'par',
     'par', 'par', 'par', 'birdie', 'par', 'eagle', 'eagle', 'bogey', 'par', 'birdie', 'bogey', 'double-bogey'], 73),
    ([3, 4, 5, 4, 4, 3, 5, 4, 4, 4, 4, 4, 5, 3, 5, 3, 4, 4], ['double-bogey', 'par', 'par', 'par', 'par', 'birdie',
     'par', 'bogey', 'bogey', 'par', 'par', 'birdie', 'par', 'par', 'par', 'par', 'birdie', 'bogey'], 74),
    ([5, 3, 4, 3, 4, 5, 4, 4, 4, 4, 4, 3, 4, 5, 5, 4, 3, 4], ['par', 'double-bogey', 'par', 'birdie', 'eagle', 'eagle',
     'birdie', 'birdie', 'eagle', 'par', 'par', 'par', 'par', 'par', 'eagle', 'birdie', 'bogey', 'bogey'], 64),
    ([5, 4, 4, 3, 4, 5, 4, 3, 3, 4, 4, 4, 4, 5, 3, 5, 4, 4], ['bogey', 'birdie', 'birdie', 'par', 'eagle',
     'par', 'birdie', 'par', 'par', 'eagle', 'par', 'bogey', 'par', 'par', 'par', 'eagle', 'par', 'par'], 65),
    ([4, 4, 4, 4, 5, 3, 5, 4, 4, 4, 3, 3, 3, 5, 4, 5, 4, 4], ['par', 'par', 'par', 'eagle', 'birdie', 'birdie',
     'bogey', 'eagle', 'bogey', 'eagle', 'par', 'birdie', 'bogey', 'bogey', 'par', 'bogey', 'par', 'par'], 68),
    ([4, 5, 5, 3, 3, 4, 5, 3, 5, 4, 3, 4, 4, 4, 4, 4, 4, 4], ['par', 'bogey', 'par', 'par', 'bogey', 'par', 'birdie',
     'birdie', 'eagle', 'bogey', 'par', 'par', 'par', 'eagle', 'bogey', 'double-bogey', 'par', 'eagle'], 70),
    ([4, 5, 3, 4, 4, 4, 5, 5, 4, 4, 4, 3, 4, 4, 3, 5, 3, 4], ['par', 'birdie', 'par', 'birdie', 'eagle', 'birdie',
     'par', 'par', 'par', 'par', 'par', 'birdie', 'par', 'double-bogey', 'par', 'birdie', 'bogey', 'eagle'], 66)
)


class GolfScoreTestCase(unittest.TestCase):
    def test_return_total_score_for_a_round_of_golf(self):
        for course, result, expected_score in test_values:
            with self.subTest():
                self.assertEqual(golf_score(course, result), expected_score)


if __name__ == '__main__':
    unittest.main()
