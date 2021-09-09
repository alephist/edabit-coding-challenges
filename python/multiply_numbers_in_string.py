"""
Multiplying Numbers in a String

Given a string of numbers separated by a comma and space, return the product of the numbers.

https://edabit.com/challenge/AcEnqyHp9q3Dd92Hn
"""
import math


def multiply_nums(nums: str) -> int:
    return math.prod(int(num) for num in nums.split(', '))
