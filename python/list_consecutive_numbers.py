"""
List of Consecutive Numbers

Implement a function that returns a list containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

https://edabit.com/challenge/Hdthzjmr5fRqEX93E
"""
from typing import List


def get_sequence(low: int, high: int) -> List[int]:
    return list(range(low, high + 1))
