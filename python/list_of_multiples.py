"""
List of Multiples

Create a function that takes two numbers as arguments (num, length) and returns a list of multiples of num until the list length reaches length.

https://edabit.com/challenge/BuwHwPvt92yw574zB
"""
from typing import List


def list_of_multiples(num: int, length: int) -> List[int]:
    return [num * i for i in range(1, length + 1)]
