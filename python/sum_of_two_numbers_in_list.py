"""
Sum of Two Numbers in List Equal to Given Number

Create a function that takes a list of numbers lst and a number n. Return True if the sum of any two elements is equal to the given number. Otherwise, return False.

https://edabit.com/challenge/KcnQtNoX5uC6PzpEF
"""
from typing import List


def check_sum(lst: List[int], n: int) -> bool:
    compliment_list = [n - num for num in lst]
    return any(num in lst for num in compliment_list)
