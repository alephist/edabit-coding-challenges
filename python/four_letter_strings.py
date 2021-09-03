"""
Return the Four Letter Strings

Create a function that takes a list of strings and returns the words that are exactly four letters.

https://edabit.com/challenge/WppCaiLw6QbvXhe6m
"""
from typing import List


def is_four_letters(lst: List[str]) -> List[str]:
    return [word for word in lst if len(word) == 4]
