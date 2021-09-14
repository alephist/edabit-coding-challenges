"""
Accumulating List

Create a function that takes in a list and returns a list of the accumulating sum.

https://edabit.com/challenge/6CGomPbu3dK536PH2
"""
from itertools import accumulate
from typing import List


def accumulating_list(lst: List[int]) -> List[int]:
    return list(accumulate(lst))
