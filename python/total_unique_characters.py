"""
Total Number of Unique Characters

Given two strings, create a function that returns the total number of unique characters from the combined string.

https://edabit.com/challenge/oTJaJ895ubqqpRPMh
"""


def count_unique(s1: str, s2: str) -> int:
    return len(set(s1 + s2))
