"""
Sum of Numbers in a List

Create a function that takes a list of numbers lst as an argument. Square each number in the list if the number is even and square root √ the number if it is odd. Return the sum of the new list rounded to two decimal places.

https://edabit.com/challenge/XSMnRi9rvLb7wWc4v
"""
import math

from typing import List


def list_sum(lst: List[int]) -> float:
    modified_nums = []

    for num in lst:
        if num % 2 == 0:
            modified_nums.append(num ** 2)
        else:
            modified_nums.append(math.sqrt(num))

    return round(sum(modified_nums), 2)
