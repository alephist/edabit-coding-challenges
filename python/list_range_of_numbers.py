"""
List From a Range of Numbers

Create a function that returns a list of all the integers between two given numbers start and end.

https://edabit.com/challenge/gcKthyMugQzDEFJTg
"""
from typing import List


def range_of_num(start: int, end: int) -> List[int]:
    return list(range(start + 1, end))
