import unittest

from typing import Set, Tuple

from potential_friend import is_potential_friend

test_values: Tuple[Tuple[Set[str], Set[str], bool]] = (
    ({"sports", "music", "chess"}, {"coding", "sports", "music"}, True),
    ({"cycling", "technology", "reading"}, {
     "dancing", "planes", "politics"}, False),
    ({"history"}, {"gaming", "drawing", "coding", "history"}, False),
    ({"films"}, {"films"}, True),
    ({"sports", "music", "chess"}, {"coding", "music", "netflix", "chess"}, True),
    ({"cycling", "technology", "drawing"}, {"dancing", "drawing"}, False),
    ({"history", "acting", "cards"}, {"history", "acting", "cards"}, True)
)


class PotentialFriendTestCase(unittest.TestCase):
    def test_check_if_two_sets_have_at_least_two_values_in_common_or_have_exact_values(self):
        for set1, set2, expected_value in test_values:
            with self.subTest():
                self.assertEqual(is_potential_friend(
                    set1, set2), expected_value)


if __name__ == '__main__':
    unittest.main()
