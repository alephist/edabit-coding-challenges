"""
Exists a Number Higher?

Write a function that returns True if there exists at least one number that is larger than or equal to n.

https://edabit.com/challenge/ZB25oqbEQnjijbwse
"""
from typing import List


def exists_higher(lst: List[int], n: int) -> bool:
    return any(num >= n for num in lst)
