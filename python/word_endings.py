"""
Word Endings

Create a function that adds a string ending to each member in a list.

https://edabit.com/challenge/TkL6GTu9QMhYnv869
"""
from typing import List


def add_ending(lst: List[str], ending: str) -> List[str]:
    return [f"{word}{ending}" for word in lst]
