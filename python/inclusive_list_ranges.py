"""
Inclusive List Ranges

Write a function that, given the start start_num and end end_num values, return a list containing all the numbers inclusive to that range.

https://edabit.com/challenge/bHTb8p5nybCrjFPze
"""
from typing import List


def inclusive_list(start_num: int, end_num: int) -> List[int]:
    return list(range(start_num, end_num + 1)) if start_num < end_num else [start_num]
