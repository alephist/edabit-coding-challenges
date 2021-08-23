"""
The Forbidden Letter

Given a letter and a list of words, return whether the letter does not appear in any of the words.

https://edabit.com/challenge/pfuxt3J2p2tph3LJQ
"""
from typing import List


def forbidden_letter(char: str, lst: List[str]) -> bool:
    return all(not char in word for word in lst)
