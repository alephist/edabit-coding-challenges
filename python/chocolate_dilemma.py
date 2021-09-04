"""
Chocolate Dilemma

Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

Write a function that returns True if the total area of chocolate is the same for each sister.

https://edabit.com/challenge/5feMy3LidqWTZ2k76
"""
from typing import List

ChocolatePiece = List[int]
Chocolate = List[ChocolatePiece]


def get_total_area(chocolate: Chocolate) -> int:
    return sum(l * w for l, w in chocolate)


def test_fairness(agatha: Chocolate, bertha: Chocolate) -> bool:
    return get_total_area(agatha) == get_total_area(bertha)
