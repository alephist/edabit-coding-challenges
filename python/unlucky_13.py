"""
Unlucky 13

Given a sorted list of numbers, remove any numbers that are divisible by 13. Return the amended list.

https://edabit.com/challenge/4opbMo6DJxem7PAZH
"""
from typing import List


def unlucky_13(nums: List[int]) -> List[int]:
    return [num for num in nums if num % 13 != 0]
