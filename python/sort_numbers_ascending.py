"""
Sort Numbers in Ascending Order

Create a function that takes a list of numbers and returns a new list, sorted in ascending order (smallest to biggest).
Sort numbers list in ascending order.
If the function's argument is None or an empty list, return an empty list.
Return a new array of sorted numbers.

https://edabit.com/challenge/gd9Yw3H4qGEt5xksN
"""
from typing import List

NumList = List[int]


def sort_nums_ascending(lst: NumList) -> NumList:
    return sorted(lst) if lst else []
