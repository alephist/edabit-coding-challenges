"""
Find None in a List

Create a function to find None in a list of numbers. The return value should be the index where None is found. If None is not found in the list, then return -1.

https://edabit.com/challenge/xPB3jeeNRLqRQ3Dwe
"""
from typing import List, Union

Item = Union[int, None]
ItemList = List[Item]


def find_none(lst: ItemList) -> int:
    try:
        return lst.index(None)
    except ValueError:
        return -1
