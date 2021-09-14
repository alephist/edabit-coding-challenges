"""
Return Duplicate Numbers

Given a list nums where each integer is between 1 and 100, return a sorted list containing only duplicate numbers from the given nums list. If there are no duplicate numbers, return None.

https://edabit.com/challenge/c4WKPr4upiKx8GwJK
"""
from collections import Counter
from typing import List, Union


def duplicate_nums(nums: List[int]) -> Union[List[int], None]:
    counter = Counter(nums)
    result = set([num for num in nums if counter[num] > 1])
    return sorted(result) if result else None
