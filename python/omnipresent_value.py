"""
Omnipresent Value

A value is omnipresent if it exists in every sublist inside the main list.

To illustrate:
[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
# 3 exists in every element inside this list, so is omnipresent.

Create a function that determines whether an input value is omnipresent for a given list.

https://edabit.com/challenge/cqucnDiDA5J5vjGAJ
"""
from typing import List


def is_omnipresent(lst: List[List[int]], val: int) -> bool:
    return all(val in item for item in lst)
