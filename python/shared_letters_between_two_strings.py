"""
Find the Shared Letters between Two Strings

Given two strings, return a string containing only the letters shared between the two.

https://edabit.com/challenge/XgJ3L3GF7o2dEaPAW
"""


def shared_letters(a: str, b: str) -> str:
    common_letters = set(a.lower()).intersection(b.lower())
    return "".join(sorted(common_letters))
