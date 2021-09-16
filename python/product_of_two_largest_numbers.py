"""
Product of Two Largest Numbers

Create a function that takes a list and returns the product of the largest and second largest number.

https://edabit.com/challenge/T3CDjiW46KT8si6A8
"""
import math
from typing import List


def product(lst: List[int]) -> int:
    sorted_unique_numbers = sorted(set(lst), reverse=True)
    if len(sorted_unique_numbers) == 1:
        return sorted_unique_numbers[0] ** 2
    return math.prod(sorted_unique_numbers[:2])
