"""
Filter out Strings from an Array

Create a function that takes a list of non-negative integers and strings and return a new list without the strings.

https://edabit.com/challenge/nunJurLEibCyn8fzn
"""
from typing import Any, List


def filter_list(lst: List[Any]) -> List[int]:
    return [item for item in lst if isinstance(item, int)]
