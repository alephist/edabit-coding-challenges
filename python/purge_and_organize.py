"""
Purge and Organize

Given a list of numbers, write a function that returns a list that...
1. Has all duplicate elements removed.
2. Is sorted from least to greatest value.

https://edabit.com/challenge/EZMCpHaNFg2Yfsnxx
"""
from typing import List, Union

NumberList = List[Union[int, float]]


def unique_sort(lst: NumberList) -> NumberList:
    return sorted(set(lst))
