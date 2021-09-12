"""
Face Interval

In mathematics, interval is the difference between the largest number and the smallest number in a list.

Create a function that takes a list and returns ":)" if the interval of the list is equal to any other element; otherwise return ":(".

Notes
Lists won't contain any duplicate numbers
If you're not given a list, return ":/"

https://edabit.com/challenge/n4KPv4eaLmkYeD6gq
"""
from typing import List


def face_interval(nums: List[int]) -> str:
    try:
        interval = max(nums) - min(nums)
        return ":)" if any(num == interval for num in nums) else ":("
    except TypeError:
        return ":/"
