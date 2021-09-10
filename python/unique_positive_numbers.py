"""
Find Unique Positive Numbers from Array

Write a function that takes a list and returns a new list with unique positive (more than 0) numbers.

https://edabit.com/challenge/9YmYQTdPSdr8K8Bnz
"""
from typing import List


def unique_lst(lst: List[int]) -> List[int]:
    unique_num_list: List[int] = []
    for num in lst:
        if num > 0 and num not in unique_num_list:
            unique_num_list.append(num)
    return unique_num_list
