"""
Where is Bob!?!

Write a function that searches a list of names (unsorted) for the name "Bob" and returns the location in the list. If Bob is not in the list, return -1.

https://edabit.com/challenge/fDkAuAwR4PMWZwBKs
"""
from typing import List


def find_bob(names: List[str]) -> int:
    try:
        return names.index('Bob')
    except ValueError:
        return -1
