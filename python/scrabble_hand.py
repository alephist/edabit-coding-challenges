"""
Scrabble Hand

Given a list of scrabble tiles (as dictionaries), create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

https://edabit.com/challenge/cH5ce3f4QgnreDW4v
"""
from typing import Dict, List, Union

Tile = Dict[str, Union[str, int]]
TileList = List[Tile]


def maximum_score(tile_hand: TileList) -> int:
    return sum(tile.get('score') for tile in tile_hand)
