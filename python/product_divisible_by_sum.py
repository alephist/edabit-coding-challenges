"""
Product Divisible by Sum?

Write a function that returns True if the product of a list is divisible by the sum of that same list. Otherwise, return False.

https://edabit.com/challenge/v3SgFw85GXis3hrXo
"""
import math

from typing import List


def divisible(lst: List[int]) -> bool:
    total_product = math.prod(lst)
    total_sum = sum(lst)
    return total_product % total_sum == 0
