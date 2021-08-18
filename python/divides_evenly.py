"""
Divides Evenly

Given two integers, a and b, return True if a can be divided evenly by b. Return False otherwise.

https://edabit.com/challenge/NRxWszQRw5JqSDmQS
"""


def divides_evenly(a: int, b: int) -> bool:
    return a % b == 0
