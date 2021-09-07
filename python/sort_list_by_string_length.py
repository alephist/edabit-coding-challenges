"""
Sort a List by String Length

Create a function that takes a list of strings and return a list, sorted from shortest to longest.

https://edabit.com/challenge/93o6y6WKFpQKoDg4T
"""
from typing import List


def sort_by_length(lst: List[str]) -> List[str]:
    return sorted(lst, key=len)
