"""
Check if All Values Are True

Create a function that returns True if all parameters are truthy, and False otherwise.

https://edabit.com/challenge/ogjDWJAT2kTXEzkD5
"""
from typing import Any


def all_truthy(*args: Any) -> bool:
    return all(item for item in args)
