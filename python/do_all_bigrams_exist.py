"""
Do All Bigrams Exist?

You are given an input array of bigrams, and an array of words.
Write a function that returns True if every single bigram from this array can be found at least once in an array of words.

https://edabit.com/challenge/7QPHWACcDihT3AM6b
"""
from typing import List


def can_find(bigrams: List[str], words: List[str]) -> bool:
    return all(any(bigram in word for word in words) for bigram in bigrams)
