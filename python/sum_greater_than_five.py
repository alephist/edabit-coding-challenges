"""
Sum Greater Than Five

Write a function that returns the sum of elements greater than 5, in the given list.

https://edabit.com/challenge/eXRfoKp8m9Q6qvpRv
"""
from typing import List, Union

Number = Union[int, float]


def sum_five(lst: List[Number]) -> Number:
    return sum(num for num in lst if num > 5)
