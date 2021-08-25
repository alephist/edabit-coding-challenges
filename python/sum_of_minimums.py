"""
Sum of Minimums

Create a function that takes a 2D list lst returns the sum of the minimum value in each row.

https://edabit.com/challenge/5NMfCfBNqw3iiDeeR
"""
from typing import List


def sum_minimums(lst: List[List[int]]) -> int:
    return sum(min(lst_item) for lst_item in lst)
