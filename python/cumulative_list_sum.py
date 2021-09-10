"""
Cumulative List Sum

Create a function that takes a list of numbers and returns a list where each number is the sum of itself + all previous numbers in the list.

https://edabit.com/challenge/qCLK8BomNpXTtFYTn
"""
from itertools import accumulate
from typing import List


def cumulative_sum(lst: List[int]) -> List[int]:
    return list(accumulate(lst))
