"""
Hashes and Pluses

Create a function that returns the number of hashes and pluses in a string.

https://edabit.com/challenge/pYwnLBJHBbHaEEano
"""
from typing import List


def hash_plus_count(txt: str) -> List[int]:
    return [txt.count('#'), txt.count('+')]
