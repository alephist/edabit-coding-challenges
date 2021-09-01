"""
Check Factors

Write a function that returns True if all integers in a list are factors of a number, and False otherwise.

https://edabit.com/challenge/cSwpsZqMoSMvQFizB
"""
from typing import List


def check_factors(factors: List[int], num: int) -> bool:
    return all(num % factor == 0 for factor in factors)
