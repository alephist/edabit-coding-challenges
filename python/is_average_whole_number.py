"""
Is the Average of All Elements a Whole Number?

Create a function that takes a list as an argument and returns True or False depending on whether the average of all elements in the list is a whole number or not.

https://edabit.com/challenge/qm5KNKG8PLE7etcJg
"""
from typing import List


def is_avg_whole(lst: List[int]) -> bool:
    avg = sum(i for i in lst) / len(lst)
    return avg.is_integer()
