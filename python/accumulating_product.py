"""
Accumulating Product

Create a function that takes a list and returns a list of the accumulating product.

https://edabit.com/challenge/iMRN9YGK4mcYja9rY
"""
from itertools import accumulate
from typing import List


def accumulating_product(lst: List[int]) -> List[int]:
    return list(accumulate(lst, lambda a, b: a * b))
