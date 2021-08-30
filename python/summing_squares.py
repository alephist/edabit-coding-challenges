"""
Summing the Squares

Create a function that takes a number n and returns the sum of all square numbers up to and including n.

https://edabit.com/challenge/aqDGJxTYCx7XWyPKc
"""


def squares_sum(n: int) -> int:
    return sum([num ** 2 for num in range(1, n + 1)])
