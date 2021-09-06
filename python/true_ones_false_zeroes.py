"""
True Ones, False Zeroes

Create a function which returns a list of booleans, from a given number. Iterating through the number one digit at a time, append True if the digit is 1 and False if it is 0.

https://edabit.com/challenge/58DYAThA2dxnAsMpL
"""
from typing import List


def integer_boolean(n: str) -> List[bool]:
    return [bool(int(char)) for char in n]
