"""
Seven Boom!

Create a function that takes a list of numbers and return "Boom!" if the digit 7 appears in the list. Otherwise, return "there is no 7 in the list".

https://edabit.com/challenge/BokhFunYBvsvHEjfx
"""
from typing import List


def seven_boom(lst: List[int]) -> str:
    is_seven_present = any('7' in str(num) for num in lst)
    return "Boom!" if is_seven_present else "there is no 7 in the list"
