"""
Characters and ASCII Code Dictionary

Write a function that transforms a list of characters into a list of dictionaries, where:
The keys are the characters themselves
The values are the ASCII codes of those characters

https://edabit.com/challenge/jpW2fAzfPtop8AYfW
"""
from typing import Dict, List

LetterASCIIDict = List[Dict[str, int]]


def to_dict(lst: List[str]) -> LetterASCIIDict:
    return [{item: ord(item)} for item in lst]
