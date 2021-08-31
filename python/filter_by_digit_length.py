"""
Filter by Digit Length

Create a function that filters out a list to include numbers that only have a certain number of digits.

https://edabit.com/challenge/WAyXZpuqxtXG9swb3
"""
from typing import List


def filter_digit_length(lst: List[int], num: int) -> List[int]:
    return [x for x in lst if len(str(x)) == num]
