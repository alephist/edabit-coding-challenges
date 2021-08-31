"""
Hitting the Jackpot

Create a function that takes a list (slot machine outcome) and returns True if all elements in the list are identical, and False otherwise. The list will contain 4 elements.

https://edabit.com/challenge/42YDYc3Pfc9QXpk2x
"""
from typing import List


def test_jackpot(result: List[str]) -> bool:
    return len(set(result)) == 1
