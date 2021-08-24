"""
Rotate the List by One

Given a list, rotates the values clockwise by one (the last value is sent to the first position).

https://edabit.com/challenge/bGHnhQr5bjH8kd8rG
"""
from typing import List

IntList = List[int]


def rotate_by_one(lst: IntList) -> IntList:
    lst_copy = lst[:]
    last_item = lst_copy.pop()
    lst_copy.insert(0, last_item)
    return lst_copy
