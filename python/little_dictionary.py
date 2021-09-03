"""
Little Dictionary

Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

https://edabit.com/challenge/GZMFr9cbntWRCdose
"""
from typing import List


def dictionary(initial: str, words: List[str]) -> List[str]:
    return [word for word in words if word.startswith(initial)]
