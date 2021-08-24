"""
Nothing is Nothing?

Given any number of parameters (which is signified using *args syntax), return True if none of the variables are falsy/empty.

https://edabit.com/challenge/n26hBhqdRk9ToTboA
"""
from typing import Any


def nothing_is_nothing(*args: Any) -> bool:
    return all(item for item in args)
