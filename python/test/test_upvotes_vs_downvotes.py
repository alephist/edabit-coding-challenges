import unittest

from typing import Dict, Tuple

from upvotes_vs_downvotes import get_vote_count

test_values: Tuple[Tuple[Dict[str, int], int]] = (
    ({'upvotes': 13, 'downvotes': 0}, 13),
    ({'upvotes': 2, 'downvotes': 33}, -31),
    ({'upvotes': 132, 'downvotes': 132}, 0),
    ({'upvotes': 0, 'downvotes': 0}, 0),
    ({'downvotes': 4, 'upvotes': 1}, -3)
)


class UpvotesVsDownvotesTestCase(unittest.TestCase):
    def test_get_difference_of_upvotes_and_downvotes(self):
        for votes, expected in test_values:
            with self.subTest():
                self.assertEqual(get_vote_count(votes), expected)


if __name__ == '__main__':
    unittest.main()
