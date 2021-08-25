"""
Integer in Range?

Create a function that validates whether a number n is within the bounds of lower and upper. Return False if n is not an integer.

https://edabit.com/challenge/chg3zdRJDpTq33PhK
"""


def int_within_bounds(n: int, lower: int, upper: int) -> bool:
    if not isinstance(n, int):
        return False

    return n >= lower and n < upper
