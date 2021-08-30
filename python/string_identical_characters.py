"""
Check if a String Contains only Identical Characters

Write a function that returns True if all characters in a string are identical and False otherwise.

https://edabit.com/challenge/i9jcFu2pGQjtJ3nea
"""


def is_identical(s: str) -> bool:
    return len(set(s)) == 1
