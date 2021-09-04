"""
Find the Largest Numbers in a Group of Lists

Create a function that takes a list of lists with integers or floats. Return a new (single) list with the largest numbers from each.

https://edabit.com/challenge/KJao8LSNmRF5Qhan4
"""
from typing import List, Union

Number = Union[int, float]
NumList = List[Number]


def find_largest_nums(lst: List[NumList]) -> List[Number]:
    return [max(sublist) for sublist in lst]
