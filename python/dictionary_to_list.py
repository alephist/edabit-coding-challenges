"""
Convert Key, Values in a Dictionary to List

Write a function that converts a dictionary into a list of keys-values tuples.

https://edabit.com/challenge/cMyMt377ReBsoTHnz
"""
from typing import Dict, List, Tuple

Dictionary = Dict[str, int]
ItemList = List[Tuple[str, int]]


def dict_to_list(d: Dictionary) -> ItemList:
    return sorted([(k, v) for k, v in d.items()])
