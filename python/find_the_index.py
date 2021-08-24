"""
Find the Index

Create a function that takes a list and a string as arguments and return the index of the string.

https://edabit.com/challenge/zFmJTah4E9mxJyoFF
"""
from typing import List


def find_index(lst: List[str], txt: str) -> int:
    try:
        return lst.index(txt)
    except ValueError:
        return 0
