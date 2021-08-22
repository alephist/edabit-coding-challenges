"""
List of Strings to List of Numbers

Create a function that takes as a parameter a list of "stringified" numbers and returns a list of numbers.

https://edabit.com/challenge/F7iLaLDBHqshWSZz5
"""
from typing import List


def to_number_list(lst: List[str]) -> List[float]:
    return [float(s) for s in lst]
