"""
Check if Number is within a Given Range

Given a number and a dictionary with min and max properties, return True if the number lies within the given range (inclusive).

https://edabit.com/challenge/x7d9TJ3G8jfv6jGak
"""
from typing import Dict


def is_in_range(n: int, r: Dict[str, int]) -> bool:
    return n >= r['min'] and n <= r['max']
