"""
Odd Up, Even Down

Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

https://edabit.com/challenge/Hm2m6Gg4piQ2Xe9Sa
"""
from typing import List


def transform(lst: List[int]) -> List[int]:
    return [num - 1 if num % 2 == 0 else num + 1 for num in lst]
