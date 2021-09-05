"""
Return Only the Integer

Write a function that takes a list of elements and returns only the integers.

https://edabit.com/challenge/DG2HLRqxFXxbaEDX4
"""
from typing import Any, List


def return_only_integers(lst: List[Any]) -> List[int]:
    return [item for item in lst if type(item) == int]
