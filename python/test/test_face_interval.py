import unittest

from typing import List, Tuple

from face_interval import face_interval

test_values: Tuple[Tuple[List[int], str]] = (
    ([1, 2, 5, 8, 3, 9], ":)"),
    ([5, 2, 6, 3, 11], ":("),
    ([20, 50, 13, 60, 79, 72, 99], ":("),
    ([11, 42, 83, 28, 47, 94], ":)"),
    ("bruh", ":/")
)


class FaceIntervalTestCase(unittest.TestCase):
    def test_return_matching_emoticon_if_interval_matches_any_number_in_list(self):
        for nums, expected_emoticon in test_values:
            with self.subTest():
                self.assertEqual(face_interval(nums), expected_emoticon)


if __name__ == '__main__':
    unittest.main()
