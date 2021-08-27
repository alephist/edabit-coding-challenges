"""
Less Than, Greater Than

Create a function that takes two numbers num1, num2, and a list lst and returns a list containing all the numbers in lst greater than num1 and less than num2.

https://edabit.com/challenge/HJNhLoS4W8jdEYprh
"""
from typing import List


def list_between(num_1: int, num_2: int, lst: List[int]) -> List[int]:
    return [num for num in lst if num > num_1 and num < num_2]
