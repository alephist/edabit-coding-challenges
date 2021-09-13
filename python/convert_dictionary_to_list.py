"""
Converting Dictionaries to Lists

Write a function that converts a dictionary into a list, where each element represents a key-value pair in the form of a list. Sort the list alphabetically by key.

https://edabit.com/challenge/PgsQAdNvsEAkese8X
"""
from typing import Dict, List

ItemList = List[List]


def to_list(dct: Dict[str, int]) -> ItemList:
    output_list = [[key, value] for key, value in dct.items()]
    return sorted(output_list, key=lambda x: x[0])
