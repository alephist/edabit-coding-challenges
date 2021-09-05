"""
Even Number Generator

Using list comprehensions, create a function that finds all even numbers from 1 to the given number.

https://edabit.com/challenge/eJLwXpuaffjFnzENN
"""
from typing import List


def find_even_nums(num: int) -> List[int]:
    return [i for i in range(1, num + 1) if i % 2 == 0]
