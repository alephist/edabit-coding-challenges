"""
Find The Largest Even Number

Write a function that finds the largest even number in a list. Return -1 if not found. The use of built-in functions max() and sorted() are prohibited.

https://edabit.com/challenge/ksZrMdraPqHjvbaE6
"""
from typing import List


def largest_even(lst: List[int]) -> int:
    even_numbers = [num for num in lst if num % 2 == 0]
    if len(even_numbers) == 0:
        return -1
    max_even = even_numbers[0]
    for num in even_numbers:
        if num > max_even:
            max_even = num
    return max_even
