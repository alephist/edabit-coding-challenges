import unittest

from typing import Tuple

from sports_player_info import Player

test_values: Tuple[Tuple[Player, str, str, str]] = (
    (Player('Patrick Mahomes', 24, 188, 104), 'Patrick Mahomes is age 24',
     'Patrick Mahomes is 188cm', 'Patrick Mahomes weighs 104kg'),
    (Player('Jimmy Garoppolo', 28, 188, 102), 'Jimmy Garoppolo is age 28',
     'Jimmy Garoppolo is 188cm', 'Jimmy Garoppolo weighs 102kg'),
    (Player('Julio Jones', 31, 191, 100), 'Julio Jones is age 31',
     'Julio Jones is 191cm', 'Julio Jones weighs 100kg')
)


class SportsPlayerInfoTestCase(unittest.TestCase):
    def test_return_age_height_and_weight_of_player(self):
        for player, expected_age, expected_height, expected_weight in test_values:
            with self.subTest():
                self.assertEqual(player.get_age(), expected_age)
                self.assertEqual(player.get_height(), expected_height)
                self.assertEqual(player.get_weight(), expected_weight)


if __name__ == '__main__':
    unittest.main()
