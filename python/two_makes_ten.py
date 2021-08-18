"""
Two Makes Ten

Create a function that takes two arguments. Both arguments are integers, a and b. Return True if one of them is 10 or if their sum is 10.

https://edabit.com/challenge/HuWQaCpFR7iTeCvTm
"""


def makes_10(a: int, b: int) -> bool:
    return (a == 10 or b == 10) or (a + b == 10)
