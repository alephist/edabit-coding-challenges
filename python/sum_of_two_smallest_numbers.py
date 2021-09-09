"""
Return the Sum of the Two Smallest Numbers

Create a function that takes a list of numbers and returns the sum of the two lowest positive numbers.

Note: Don't count negative numbers

https://edabit.com/challenge/xYpG6ry6CLqgcwRWC
"""
from typing import List


def sum_two_smallest_nums(lst: List[int]) -> int:
    sorted_non_negative_nums = sorted(num for num in lst if num >= 0)
    return sum(sorted_non_negative_nums[:2])
