"""
Number Length Sort

Create a sorting function which sorts numbers not by numerical order, but by number length! This means sorting numbers with the least digits first, up to the numbers with the most digits.

https://edabit.com/challenge/Fx7hyoNTZNMGzc3uj
"""
from typing import List


def number_len_sort(lst: List[int]) -> List[int]:
    return sorted(lst, key=lambda x: len(str(x)))
