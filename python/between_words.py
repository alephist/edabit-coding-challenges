"""
Between Words

Write a function that takes three string arguments (first, last, and word) and returns True if word is found between first and last in the list, otherwise False.

https://edabit.com/challenge/X9o2kweQFsSRXGh2c
"""


def is_between(first: str, last: str, word: str) -> bool:
    return word >= first and word <= last
