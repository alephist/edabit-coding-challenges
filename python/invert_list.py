"""
Invert a List

Create a function that takes a list of numbers lst and returns an inverted list.

https://edabit.com/challenge/Jm4eKTENReSiQFw9t
"""
from typing import List


def invert_list(lst: List[int]) -> List[int]:
    return [-num for num in lst]
