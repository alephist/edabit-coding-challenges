"""
Lowercase and Uppercase Map

Write a function that creates a dictionary with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

https://edabit.com/challenge/pimnBHXJNtQffq4Cf
"""
from typing import Dict, List


def mapping(letters: List[str]) -> Dict[str, str]:
    return {letter: letter.upper() for letter in letters}
