"""
Sum of Every Nth Number

Given a list of numbers and a positive value for n, return the sum of every nth number in the list.

https://edabit.com/challenge/ET2voBkuSPLb3mFSD
"""
from typing import List


def sum_every_nth(numbers: List[int], n: int) -> int:
    return sum(numbers[n - 1::n])
