"""
Factorize a Number

Create a function that takes a number as its argument and returns a list of all its factors.

https://edabit.com/challenge/dSbdxuapwsRQQPuC6
"""
from typing import List


def factorize(num: int) -> List[int]:
    return [x for x in range(1, num + 1) if num % x == 0]
