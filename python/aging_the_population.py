"""
Aging the Population

Given a dictionary of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.

https://edabit.com/challenge/zY8WSKGcqmkGd73Wr
"""
from typing import Dict


def after_n_years(names: Dict[str, int], n: int) -> Dict[str, int]:
    return {key: value + abs(n) for key, value in names.items()}
