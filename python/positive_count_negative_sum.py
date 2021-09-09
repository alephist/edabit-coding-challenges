"""
Positive Count / Negative Sum

Create a function that takes a list of positive and negative numbers. Return a list where the first element is the count of positive numbers and the second element is the sum of negative numbers.

Notes:
If given an empty list, return an empty list: []
0 is not positive

https://edabit.com/challenge/RTZRnXCJkfALTTdqt
"""
from typing import List


def sum_neg(lst: List[int]) -> List[int]:
    if len(lst) == 0:
        return []

    count_of_positive_numbers = len([num for num in lst if num > 0])
    sum_of_negative_numbers = sum(num for num in lst if num <= 0)
    return [count_of_positive_numbers, sum_of_negative_numbers]
