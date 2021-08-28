"""
Array of Word Lengths

Create a function that takes a list of words and transforms it into a list of each word's length.

https://edabit.com/challenge/sTbmSqFX7HxAesWor
"""
from typing import List


def word_lengths(lst: List[str]) -> List[int]:
    return [len(word) for word in lst]
