"""
Check if a List Contains a Given Number

Write a function to check if a list contains a particular number.

https://edabit.com/challenge/ZGezQDXsturZGpQcS
"""
from typing import List


def check(lst: List[int], el: int) -> bool:
    return el in lst
