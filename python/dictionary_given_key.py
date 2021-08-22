"""
Does the Dictionary Contain a Given Key?

Write a function that returns True if a dictionary contains the specified key, and False otherwise.

https://edabit.com/challenge/zdo6JCL6Z5d2fT8JB
"""
from typing import Any, Dict

Dictionary = Dict[str, Any]


def has_key(dictionary: Dictionary, key: str) -> bool:
    return key in dictionary
