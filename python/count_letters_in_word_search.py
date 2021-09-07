"""
Count Letters in a Word Search

Create a function that counts the number of times a particular letter shows up in the word search.

https://edabit.com/challenge/GBv4nB8SzkAnrM3B9
"""
from typing import List


def letter_counter(lst: List[List[str]], letter: str) -> int:
    return sum(sublist.count(letter) for sublist in lst)
