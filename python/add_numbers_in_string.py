"""
Adding Numbers in a String

Given a string of numbers separated by a comma and space, return the total sum of all the numbers.

https://edabit.com/challenge/stAFzKqQnWHztzrAW
"""


def add_nums(nums: str) -> int:
    return sum(int(num) for num in nums.split(', '))
