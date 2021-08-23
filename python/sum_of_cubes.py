"""
Sum of Cubes

Create a function that takes a positive integer n, and returns the sum of all the cubed values from 1 to n.

https://edabit.com/challenge/3XYv6RZbrbaoTWJ4H
"""


def sum_cubes(n: int) -> int:
    num_list = list(range(1, n + 1))
    return sum(num ** 3 for num in num_list)
