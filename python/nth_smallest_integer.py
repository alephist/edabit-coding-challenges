"""
Nth Smallest Integer

Given an unsorted list, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

https://edabit.com/challenge/TApvBKg2WiAXPnwLS
"""
from typing import List, Union


def nth_smallest(lst: List[int], n: int) -> Union[int, None]:
    try:
        return sorted(lst)[n-1]
    except IndexError:
        return None
