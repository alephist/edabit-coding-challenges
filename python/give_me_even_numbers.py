"""
Give Me the Even Numbers

Create a function that takes two parameters (start, stop), and returns the sum of all even numbers in the range.

Notes
Remember that the start and stop values are inclusive.

https://edabit.com/challenge/b4fsyhyiRptsBzhcm
"""


def sum_even_nums_in_range(start: int, stop: int) -> int:
    return sum(num for num in range(start, stop + 1) if num % 2 == 0)
