"""
Two Distinct Elements

In each input list, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

https://edabit.com/challenge/yL5WmWTCNwwb4GnR7
"""
from typing import List


def return_unique(lst: List[int]) -> List[int]:
    return [item for item in lst if lst.count(item) == 1]
