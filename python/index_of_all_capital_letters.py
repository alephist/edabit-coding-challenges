"""
Return the Index of All Capital Letters

Create a function that takes a single string as argument and returns an ordered list containing the indices of all capital letters in the string.

https://edabit.com/challenge/rQkriLJBc9CbfRbJb
"""
from typing import List


def index_of_caps(word: str) -> List[int]:
    return [i for i, letter in enumerate(word) if letter.isupper()]
