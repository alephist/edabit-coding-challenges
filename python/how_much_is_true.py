"""
How Much is True?

Create a function which returns the number of True values in a list.

https://edabit.com/challenge/wFpi2zFGxWxfj5mZS
"""
from typing import List


def count_true(lst: List[bool]) -> int:
    return lst.count(True)
