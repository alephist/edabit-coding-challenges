"""
Filter Repeating Character Strings

Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

https://edabit.com/challenge/C4vbzpksgsTbw87NC
"""
from typing import List


def identical_filter(lst: List[str]) -> List[str]:
    return [item for item in lst if len(set(item)) == 1]
