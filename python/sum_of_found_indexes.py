"""
Sum of Found Indexes

Create a function which takes in a list of numbers and a number to find. Return the sum of every index in the list which matches the chosen number.

https://edabit.com/challenge/YKgzPFZKt9XHXQHAu
"""
from typing import List


def sum_found_indexes(lst: List[int], n: int) -> int:
    return sum(i for i, value in enumerate(lst) if value == n)
